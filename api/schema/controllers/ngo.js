'use strict';
/* global strapi */

const model = 'ngo';

module.exports = {

  /* Get NGOs entries.
   *
   * @return {Array}
   */
  find: function * () {
    this.model = model;
    try {
      let entries = yield strapi.hooks.blueprints.find(this);
      this.body = entries;
    } catch (err) {
      this.body = err;
    }
  },

  /* Get a specific NGO.
   *
   * @return {Object|Array}
   */
  findOne: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.findOne(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /* Create a NGO entry.
   *
   * @return {Object}
   */
  create: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.create(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /* Update a NGO entry.
   *
   * @return {Object}
   */
  update: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.update(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /* Destroy a NGO entry.
   *
   * @return {Object}
   */
  destroy: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.destroy(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /* Add an entry to a specific NGO.
   *
   * @return {Object}
   */
  add: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.add(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /* Remove a specific entry from a specific NGO.
   *
   * @return {Object}
   */
  remove: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.remove(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  }
};
