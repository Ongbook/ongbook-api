'use strict';
/* global strapi */

const path = require('path');
const _ = require('lodash');
const anchor = require('anchor');
const bcrypt = require('bcryptjs');

const settings = require('./User.settings.json');

module.exports = {
  identity: settings.identity,
  connection: settings.connection,
  schema: settings.schema,
  limit: settings.limit,
  attributes: _.merge(settings.attributes, {
    toJSON: function () {
      const obj = this.toObject();
      delete obj.password;
      delete obj.resetPasswordToken;
      return obj;
    },
    validatePassword: function (password) {
      if (!this.password) {
        return false;
      } else {
        return bcrypt.compareSync(password, this.password);
      }
    }
  }),

  autoCreatedAt: settings.autoCreatedAt,
  autoUpdatedAt: settings.autoUpdatedAt,

  beforeValidate: function (values, next) {
    const module = path.basename(__filename, '.js').toLowerCase();

    if (strapi.api.hasOwnProperty(module) && _.size(strapi.api[module].templates)) {
      const template = _.includes(strapi.api[module].templates, values.template) ? values.template : strapi.models[module].defaultTemplate;

      values.template = template;

      const templateAttributes = _.merge(_.pick(strapi.models[module].attributes, 'lang'), strapi.api[module].templates[template].attributes);
      const err = [];

      _.forEach(templateAttributes, function (rules, key) {
        if (values.hasOwnProperty(key) || key === 'lang') {
          if (key === 'lang') {

            // Set lang with correct value
            values[key] = _.includes(strapi.config.i18n.locales, values[key]) ? values[key] : strapi.config.i18n.defaultLocale;
          } else {
            // Check validations
            const rulesTest = anchor(values[key]).to(rules);

            if (rulesTest) {
              err.push(rulesTest[0]);
            }
          }
        } else {
          rules.required && err.push({
            rule: 'required',
            message: 'Missing attributes ' + key
          });
        }
      });

      _.isEmpty(err) ? next() : next(err);
    } else {
      next(new Error('Unknown module or no template detected'));
    }
  },

  beforeCreate: function (user, next) {
    strapi.api.user.services.user.hashPassword(user, next);
  },

  beforeUpdate: function (user, next) {
    strapi.api.user.services.user.hashPassword(user, next);
  }
};
