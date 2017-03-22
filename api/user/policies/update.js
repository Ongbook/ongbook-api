'use strict';

exports.update = function * (next) {
  // Set the `updatedBy` field.
  this.request.body.updatedBy = this.user && this.user.id;

  yield next;
};
