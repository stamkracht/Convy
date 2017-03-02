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

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _components = require('../components/components.block-user');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserList = function (_React$Component) {
  (0, _inherits3.default)(UserList, _React$Component);

  function UserList(props) {
    (0, _classCallCheck3.default)(this, UserList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UserList.__proto__ || (0, _getPrototypeOf2.default)(UserList)).call(this, props));

    _this.state = {
      search: false
    };
    return _this;
  }

  (0, _createClass3.default)(UserList, [{
    key: 'render',
    value: function render() {
      var listType = void 0,
          groupAction = void 0,
          users = void 0,
          userListInnerClass = void 0,
          emptyMessageContainer = void 0,
          input = void 0;

      listType = this.props.listType;

      if (listType === 'chats') {
        groupAction = _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'button',
            { onClick: this.newGroupConversation.bind(this) },
            _react2.default.createElement('i', { className: 'icon-group-add' })
          )
        );
      }

      users = renderUsers(this.props);

      userListInnerClass = 's-user-list__inner';

      if (this.props.users.length < 1) {
        userListInnerClass = 's-user-list__inner state-empty';
        emptyMessageContainer = _react2.default.createElement(
          'p',
          { className: 'empty-message' },
          this.props.emptyMessage
        );
      }

      if (this.state.search) {
        input = _react2.default.createElement(
          'div',
          { className: 's-block-actions__input' },
          _react2.default.createElement(
            'article',
            { className: 'c-input-group' },
            _react2.default.createElement(
              'button',
              { className: 'c-input-group__addon', onClick: this.hideSearch.bind(this) },
              _react2.default.createElement('i', { className: 'icon-close' })
            ),
            _react2.default.createElement('input', { className: 'c-input-group__field', type: 'text', placeholder: this.props.searchPlaceholder }),
            _react2.default.createElement(
              'button',
              { className: 'c-input-group__addon submit' },
              _react2.default.createElement('i', { className: 'icon-search' })
            )
          )
        );
      }

      return _react2.default.createElement(
        'section',
        { className: 's-user-list' },
        _react2.default.createElement(
          'div',
          { className: userListInnerClass },
          _react2.default.createElement(
            'section',
            { className: 's-block-actions' },
            _react2.default.createElement(
              'nav',
              { className: 's-block-actions__nav' },
              _react2.default.createElement(
                'ul',
                null,
                groupAction,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'button',
                    { onClick: this.showSearch.bind(this) },
                    _react2.default.createElement('i', { className: 'icon-search' })
                  )
                )
              ),
              input
            )
          ),
          emptyMessageContainer,
          users
        )
      );
    }
  }, {
    key: 'showSearch',
    value: function showSearch() {
      console.info('Show search bar.');

      this.setState({
        search: true
      });
    }
  }, {
    key: 'hideSearch',
    value: function hideSearch() {
      console.info('Hide search bar.');

      this.setState({
        search: false
      });
    }
  }, {
    key: 'newGroupConversation',
    value: function newGroupConversation() {
      console.info('Start new group conversation.');
    }
  }]);
  return UserList;
}(_react2.default.Component);

UserList.propTypes = {
  openChat: _react2.default.PropTypes.func,
  users: _react2.default.PropTypes.array,
  listType: _react2.default.PropTypes.string
};

function renderUsers(props) {
  if (props.users.length > 0) {
    return props.users.map(function (user, index) {
      return _react2.default.createElement(_components2.default, {
        key: index,
        id: user.id,
        name: user.firstName,
        description: user.description,
        lastMessage: user.lastMessage,
        image: user.image,
        lastSeenAt: user.lastSeenAt,
        lastMessageAt: user.lastMessageAt,
        unreadMessagesCount: user.unreadMessagesCount
      });
    });
  } else {
    return [];
  }
}

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    openChat: function openChat(id) {
      dispatch(_actions2.default.header.openChat(id));
    }
  };
};

var UserListConnect = (0, _reactRedux.connect)(null, mapDispatchToProps)(UserList);

exports.default = UserListConnect;