'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _redux = require('redux');

var _reducers = require('./reducers.header');

var _reducers2 = _interopRequireDefault(_reducers);

var _reducers3 = require('./reducers.contacts');

var _reducers4 = _interopRequireDefault(_reducers3);

var _reducers5 = require('./reducers.chats');

var _reducers6 = _interopRequireDefault(_reducers5);

var _reducers7 = require('./reducers.me');

var _reducers8 = _interopRequireDefault(_reducers7);

var _reducers9 = require('./reducers.swipe-view');

var _reducers10 = _interopRequireDefault(_reducers9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// combine the reducers.
var convyReducers = {
  headerState: _reducers2.default,
  contactsState: _reducers4.default,
  chatsState: _reducers6.default,
  meState: _reducers8.default,
  swipeViewState: _reducers10.default
};

exports.default = function () {
  var reducers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _redux.combineReducers)((0, _assign2.default)({}, reducers, convyReducers));
};