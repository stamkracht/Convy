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

var _components = require('../components/components.block-user');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChatSettings = function (_React$Component) {
  (0, _inherits3.default)(ChatSettings, _React$Component);

  function ChatSettings(props) {
    (0, _classCallCheck3.default)(this, ChatSettings);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ChatSettings.__proto__ || (0, _getPrototypeOf2.default)(ChatSettings)).call(this, props));

    _this.state = {
      search: false
    };
    return _this;
  }

  (0, _createClass3.default)(ChatSettings, [{
    key: 'render',
    value: function render() {
      var groupName = void 0,
          participants = void 0,
          heading = void 0,
          icon = void 0,
          styles = void 0,
          input = void 0,
          chatSettingsClass = void 0;

      groupName = this.props.groupName ? this.props.groupName : 'Group name';

      participants = renderParticipants(this.props);

      chatSettingsClass = this.props.groupNew ? 's-chat-settings state-new' : 's-chat-settings';

      if (this.props.participants.length === 0) {
        heading = 'Tap on the right icon above to start add participants.';
      } else {
        heading = 'Participants';
      }

      if (this.props.groupImage) {
        styles = { backgroundImage: 'url(' + this.props.groupImage + ')' };
      } else {
        icon = _react2.default.createElement(
          'span',
          { className: 'c-banner__icon' },
          _react2.default.createElement('i', { className: 'icon-image' })
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
            _react2.default.createElement('input', { className: 'c-input-group__field', type: 'text', placeholder: 'Add participants' }),
            _react2.default.createElement(
              'button',
              { className: 'c-input-group__addon submit' },
              _react2.default.createElement('i', { className: 'icon-group-add' })
            )
          )
        );
      }

      return _react2.default.createElement(
        'section',
        { className: chatSettingsClass },
        _react2.default.createElement(
          'div',
          { className: 's-chat-settings__inner' },
          _react2.default.createElement(
            'section',
            { className: 's-block-actions' },
            _react2.default.createElement(
              'nav',
              { className: 's-block-actions__nav' },
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'button',
                    { className: 'sign-out', onClick: this.leaveGroup.bind(this) },
                    _react2.default.createElement('i', { className: 'icon-sign-out' }),
                    _react2.default.createElement(
                      'span',
                      null,
                      'Leave group'
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'button',
                    { onClick: this.editGroupName.bind(this) },
                    _react2.default.createElement('i', { className: 'icon-pencil' })
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'button',
                    { onClick: this.addGroupImage.bind(this) },
                    _react2.default.createElement('i', { className: 'icon-image' })
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'button',
                    { onClick: this.showSearch.bind(this) },
                    _react2.default.createElement('i', { className: 'icon-group-add' })
                  )
                )
              ),
              input
            )
          ),
          _react2.default.createElement(
            'article',
            { className: 'c-banner', style: styles },
            _react2.default.createElement(
              'h1',
              { className: 'c-banner__title' },
              groupName
            ),
            icon
          ),
          _react2.default.createElement(
            'h2',
            { className: 's-chat-settings__heading' },
            heading
          ),
          participants
        )
      );
    }
  }, {
    key: 'leaveGroup',
    value: function leaveGroup() {
      console.info('Leave group chat.');
    }
  }, {
    key: 'editGroupName',
    value: function editGroupName() {
      console.info('Edit group name.');
    }
  }, {
    key: 'addGroupImage',
    value: function addGroupImage() {
      console.info('Add group image.');
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
  }]);
  return ChatSettings;
}(_react2.default.Component);

ChatSettings.propTypes = {
  groupNew: _react2.default.PropTypes.bool,
  groupName: _react2.default.PropTypes.string,
  groupImage: _react2.default.PropTypes.string,
  participants: _react2.default.PropTypes.array
};

function renderParticipants(props) {
  if (props.participants.length > 0) {
    return props.participants.map(function (user, index) {
      return _react2.default.createElement(_components2.default, {
        key: index,
        name: user.firstName,
        description: user.description,
        imageSource: user.imageSource,
        lastSeenDate: user.lastSeenDate,
        openChat: function openChat() {
          return props.openChat(user.id);
        }
      });
    });
  } else {
    return [];
  }
}

exports.default = ChatSettings;