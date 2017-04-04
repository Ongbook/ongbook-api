'use strict';
/* global User _ */

const _ = require('lodash');

const settings = require('./NGO.settings.json');

module.exports = {
  identity: settings.identity,
  connection: settings.connection,
  schema: settings.schema,
  limit: settings.limit,
  autoCreatedAt: settings.autoCreatedAt,
  autoUpdatedAt: settings.autoUpdatedAt,

  attributes: _.merge(settings.attributes, {
    toJSON: function () {
      const ngo = this.toObject()
      
      _.forEach(ngo.member, function(member) {
        delete member.ngo
        delete member.id
        
        // TODO: Replace ngo.member[0].person that is ID by user json
        // User.findOne({ id: member.person }).exec((err, user) => {
        //   if (err) return err
        //   member.person = user.toJSON()
        // })
      })
      
      return ngo
    },
  }),
  
  // beforeCreate: (ngo, next) => {},
};
