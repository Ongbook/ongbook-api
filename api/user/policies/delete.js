'use strict';

/**
 * Delete the `roles` object to prevent security issues.
 *
 * @param next
 */

exports.delete = function * (next) {
  delete this.request.body.roles;

  yield next;
};
