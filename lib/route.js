'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _scopes = require('./scopes/scopes.application');

var _scopes2 = _interopRequireDefault(_scopes);

var _scopes3 = require('./scopes/scopes.main');

var _scopes4 = _interopRequireDefault(_scopes3);

var _scopes5 = require('./scopes/scopes.conversation');

var _scopes6 = _interopRequireDefault(_scopes5);

var _scopes7 = require('./scopes/scopes.profile');

var _scopes8 = _interopRequireDefault(_scopes7);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactRouter.Route,
    { path: _config2.default.urlPrefix, component: _scopes2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _scopes4.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'conversation/:chatId', component: _scopes6.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'my-profile', component: _scopes8.default })
  );
};