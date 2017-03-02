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

var _scopes = require('./scopes.swipe-view');

var _scopes2 = _interopRequireDefault(_scopes);

var _scopes3 = require('./scopes.user-list');

var _scopes4 = _interopRequireDefault(_scopes3);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function (_React$Component) {
  (0, _inherits3.default)(Main, _React$Component);

  function Main() {
    (0, _classCallCheck3.default)(this, Main);
    return (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).apply(this, arguments));
  }

  (0, _createClass3.default)(Main, [{
    key: '_getChatList',
    value: function _getChatList() {
      var _this2 = this;

      return this.props.chatsState.chatList.map(function (id) {
        return _this2.props.chatsState.chats[id];
      });
    }
  }, {
    key: '_getContactList',
    value: function _getContactList() {
      var _this3 = this;

      return this.props.contactsState.contactList.map(function (id) {
        return _this3.props.contactsState.contacts[id];
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'main',
        { className: 's-main' },
        _react2.default.createElement(
          _scopes2.default,
          {
            swipeViewId: swipeViewId
          },
          _react2.default.createElement(_scopes4.default, {
            listType: 'chats',
            users: this._getChatList(),
            searchPlaceholder: 'Search conversations',
            emptyMessage: 'Tap on one of the icons above to start a conversation.'
          }),
          _react2.default.createElement(_scopes4.default, {
            listType: 'contacts',
            users: this._getContactList(),
            searchPlaceholder: 'Search contacts',
            emptyMessage: 'Please wait for participants to join the platform.'
          })
        )
      );
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.setMainHeader();
      if (!this.props.contactsState.receivedAt) {
        this.props.fetchContacts();
      }
      if (!this.props.chatsState.receivedAt) {
        this.props.fetchChats();
      }
    }
  }]);
  return Main;
}(_react2.default.Component);

var swipeViewId = 'mainSwipeView';

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return state[_config2.default.stateName];
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    setSwipeViewIndex: function setSwipeViewIndex(index) {
      dispatch(_actions2.default.swiper.setSwipeViewIndex(swipeViewId, index));
    },
    fetchContacts: function fetchContacts() {
      dispatch(_actions2.default.contacts.fetchContacts());
    },
    fetchChats: function fetchChats() {
      dispatch(_actions2.default.chats.fetchChats());
    },
    setMainHeader: function setMainHeader() {
      dispatch(_actions2.default.header.setMode('MAIN'));
    }
  };
};

var MainConnect = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Main);

exports.default = MainConnect;