"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

exports.conditionalClasses = conditionalClasses;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function conditionalClasses(conditionalClasses) {
  var classString = (0, _keys2.default)(conditionalClasses).filter(function (key) {
    return conditionalClasses[key];
  }).join(" ");
  return classString;
}