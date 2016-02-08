'use strict';

function Employee() {
  if (! (this instanceof Employee)) {
    return new Employee();
  }
}

Employee.prototype = {
  get data() {
    return this._data;
  },

  _data: []
};

Employee.prototype.addData = function addData(data) {
    this._data.push(data);
};

Employee.prototype.toJSON = function toJSON() {
  console.dir('This is toJSON');
  return this.data;
};

exports = module.exports = Employee;

// Electrolyte annotation that indicates the exported component
// is not a factory method.
exports['@literal'] = true;