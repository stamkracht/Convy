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

var _components = require('../components/components.app-background');

var _components2 = _interopRequireDefault(_components);

var _reactRedux = require('react-redux');

var _scopes = require('../scopes/scopes.header');

var _scopes2 = _interopRequireDefault(_scopes);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Application = function (_React$Component) {
  (0, _inherits3.default)(Application, _React$Component);

  function Application() {
    (0, _classCallCheck3.default)(this, Application);
    return (0, _possibleConstructorReturn3.default)(this, (Application.__proto__ || (0, _getPrototypeOf2.default)(Application)).apply(this, arguments));
  }

  (0, _createClass3.default)(Application, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_components2.default, { backgroundImage: 'dest/bg-app.jpg' }),
        _react2.default.createElement(_scopes2.default, null),
        this.props.meState.me && this.props.children
      );
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.fetchMe();
      this.chatSubscribtion = _actions2.default.chats.subscribeToChats(this.props.updateChat);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.chatSubscribtion.cancel();
    }
  }]);
  return Application;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return state[_config2.default.stateName];
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchMe: function fetchMe() {
      return dispatch(_actions2.default.me.fetchMe());
    },
    updateChat: function updateChat(id, update) {
      return dispatch(_actions2.default.chats.updateChat(id, update));
    }
  };
};

var ApplicationConnect = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Application);

exports.default = ApplicationConnect;