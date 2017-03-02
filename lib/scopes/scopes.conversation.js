'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _scopes3 = require('./scopes.chat');

var _scopes4 = _interopRequireDefault(_scopes3);

var _scopes5 = require('./scopes.profile');

var _scopes6 = _interopRequireDefault(_scopes5);

var _scopes7 = require('./scopes.chat-settings');

var _scopes8 = _interopRequireDefault(_scopes7);

var _scopes9 = require('./scopes.stats');

var _scopes10 = _interopRequireDefault(_scopes9);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Conversation = function (_React$Component) {
  (0, _inherits3.default)(Conversation, _React$Component);

  function Conversation() {
    (0, _classCallCheck3.default)(this, Conversation);
    return (0, _possibleConstructorReturn3.default)(this, (Conversation.__proto__ || (0, _getPrototypeOf2.default)(Conversation)).apply(this, arguments));
  }

  (0, _createClass3.default)(Conversation, [{
    key: '_getContactId',
    value: function _getContactId(chat) {
      var _this2 = this;

      return chat.members.filter(function (member) {
        return member.id != _this2.props.meState.id;
      })[0].id;
    }
  }, {
    key: 'render',
    value: function render() {
      var view = void 0;

      var chat = this.state && this.props.chatsState.chats[this.state.chatId];

      if (chat) {
        var group = chat.members.length > 2;
        var groupNew = true;
        var groupName = 'We are TMNT';
        var groupImage = 'http://placehold.it/500x200';
        var participants = [];
        if (group) {
          view = _react2.default.createElement(_scopes8.default, {
            groupNew: groupNew,
            groupName: groupName,
            groupImage: groupImage,
            participants: participants
          });
        } else if (this.state.contactId && this.props.contactsState.contacts[this.state.contactId]) {
          view = _react2.default.createElement(_scopes6.default, { isRoot: false, user: this.props.contactsState.contacts[this.state.contactId] });
        }
      }

      return _react2.default.createElement(
        'main',
        { className: 's-conversation' },
        _react2.default.createElement(
          _scopes2.default,
          {
            swipeViewId: swipeViewId
          },
          _react2.default.createElement(_scopes4.default, { chat: chat }),
          view,
          _react2.default.createElement(_scopes10.default, null)
        )
      );
    }
  }, {
    key: '_loadInitialData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var chat, contactId, _chat, _contactId;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.props.chatsState.chats[this.props.params.chatId]) {
                  _context.next = 12;
                  break;
                }

                _context.next = 3;
                return this.props.fetchChat(this.props.params.chatId);

              case 3:
                chat = this.props.chatsState.chats[this.props.params.chatId];

                this.setState({ chatId: this.props.params.chatId });
                contactId = this._getContactId(chat);

                if (this.props.contactsState.contacts[contactId]) {
                  _context.next = 9;
                  break;
                }

                _context.next = 9;
                return this.props.fetchContact(contactId);

              case 9:
                this.setState({ contactId: contactId });
                _context.next = 19;
                break;

              case 12:
                _chat = this.props.chatsState.chats[this.props.params.chatId];

                this.setState({ chatId: this.props.params.chatId });
                _contactId = this._getContactId(_chat);

                if (this.props.contactsState.contacts[_contactId]) {
                  _context.next = 18;
                  break;
                }

                _context.next = 18;
                return this.props.fetchContact(_contactId);

              case 18:
                this.setState({ contactId: _contactId });

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _loadInitialData() {
        return _ref.apply(this, arguments);
      }

      return _loadInitialData;
    }()
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.setChatHeader();
      if (this.props.params.chatId) {
        this._loadInitialData();
      }
    }
  }]);
  return Conversation;
}(_react2.default.Component);

var swipeViewId = 'conversationSwipeView';
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return state[_config2.default.stateName];
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchChat: function fetchChat(id) {
      return dispatch(_actions2.default.chats.fetchChat(id));
    },
    fetchContact: function fetchContact(id) {
      return dispatch(_actions2.default.contacts.fetchContact(id));
    },
    setSwipeViewIndex: function setSwipeViewIndex(index) {
      return dispatch(_actions2.default.swiper.setSwipeViewIndex(swipeViewId, index));
    },
    setChatHeader: function setChatHeader() {
      return dispatch(_actions2.default.header.setMode('CHAT'));
    }
  };
};

var ConversationConnect = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Conversation);

exports.default = ConversationConnect;