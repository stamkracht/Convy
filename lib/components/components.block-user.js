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

var _reactRouter = require('react-router');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/nl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockUser = function (_React$Component) {
  (0, _inherits3.default)(BlockUser, _React$Component);

  function BlockUser() {
    (0, _classCallCheck3.default)(this, BlockUser);
    return (0, _possibleConstructorReturn3.default)(this, (BlockUser.__proto__ || (0, _getPrototypeOf2.default)(BlockUser)).apply(this, arguments));
  }

  (0, _createClass3.default)(BlockUser, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouter.Link,
        { to: 'conversation/' + this.props.id, className: 'c-block-user', key: this.props.id },
        _react2.default.createElement('span', { className: 'circle' }),
        _react2.default.createElement(
          'ul',
          { className: 'c-block-user__data' },
          this.renderBlockUserData()
        ),
        _react2.default.createElement(
          'div',
          { className: 'o-flag' },
          _react2.default.createElement(
            'div',
            { className: 'c-block-user__image o-flag__img' },
            _react2.default.createElement('img', { src: this.props.image, alt: 'User name', width: '50', height: '50' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'c-block-user__content o-flag__body' },
            _react2.default.createElement(
              'p',
              { className: 'c-block-user__title' },
              this.props.name
            ),
            _react2.default.createElement(
              'p',
              { className: 'c-block-user__text' },
              this.renderBlockUserText()
            )
          )
        )
      );
    }
  }, {
    key: 'renderBlockUserData',
    value: function renderBlockUserData() {
      var data = [];

      if (this.props.unreadMessagesCount) {
        data.push(_react2.default.createElement(
          'li',
          { key: 'counter', className: 'message-count' },
          this.props.unreadMessagesCount,
          ' new messages'
        ));
      }

      if (this.props.lastMessage) {
        data.push(_react2.default.createElement(
          'li',
          { key: 'last-message' },
          (0, _moment2.default)(this.props.lastMessageAt).fromNow()
        ));
      } else if (this.props.lastSeenAt) {
        data.push(_react2.default.createElement(
          'li',
          { key: 'last-seen' },
          (0, _moment2.default)(this.props.lastSeenAt).fromNow()
        ));
      }

      return data;
    }
  }, {
    key: 'renderBlockUserText',
    value: function renderBlockUserText() {
      var text = void 0;

      if (this.props.lastMessage) {
        text = this.props.lastMessage;
      } else if (this.props.description) {
        text = this.props.description;
      }

      return text;
    }
  }]);
  return BlockUser;
}(_react2.default.Component);

BlockUser.propTypes = {
  id: _react2.default.PropTypes.number,
  name: _react2.default.PropTypes.string,
  description: _react2.default.PropTypes.string,
  lastMessage: _react2.default.PropTypes.string,
  imageSource: _react2.default.PropTypes.string,
  lastSeenDate: _react2.default.PropTypes.string,
  lastMessageDate: _react2.default.PropTypes.string,
  unreadMessagesLength: _react2.default.PropTypes.number
};

exports.default = BlockUser;