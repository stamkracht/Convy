'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components/components.messenger');

var _components2 = _interopRequireDefault(_components);

var _scopes = require('./scopes.block-chat');

var _scopes2 = _interopRequireDefault(_scopes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chat = function (_React$Component) {
  (0, _inherits3.default)(Chat, _React$Component);

  function Chat() {
    (0, _classCallCheck3.default)(this, Chat);
    return (0, _possibleConstructorReturn3.default)(this, (Chat.__proto__ || (0, _getPrototypeOf2.default)(Chat)).apply(this, arguments));
  }

  (0, _createClass3.default)(Chat, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 's-chat' },
        _react2.default.createElement(
          'div',
          { className: 's-chat__output' },
          _react2.default.createElement(_scopes2.default, { chat: this.props.chat })
        ),
        _react2.default.createElement(
          'div',
          { className: 's-chat__input' },
          _react2.default.createElement(_components2.default, null)
        )
      );
    }

    // functions.

  }]);
  return Chat;
}(_react2.default.Component);

exports.default = Chat;