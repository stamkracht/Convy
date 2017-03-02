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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Messenger = function (_React$Component) {
  (0, _inherits3.default)(Messenger, _React$Component);

  function Messenger(props) {
    (0, _classCallCheck3.default)(this, Messenger);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Messenger.__proto__ || (0, _getPrototypeOf2.default)(Messenger)).call(this, props));

    _this.state = {
      showAttachment: false
    };
    return _this;
  }

  (0, _createClass3.default)(Messenger, [{
    key: 'render',
    value: function render() {
      var messengerAttachmentClass = 'c-messenger__attachment ' + (this.state.showAttachment ? 'state-active' : '');

      return _react2.default.createElement(
        'article',
        { className: 'c-messenger' },
        _react2.default.createElement(
          'button',
          { className: messengerAttachmentClass, onClick: this.toggleAttachment.bind(this) },
          _react2.default.createElement('i', { className: 'icon-add-circle-outline' })
        ),
        _react2.default.createElement('textarea', { placeholder: 'Share knowledge' }),
        _react2.default.createElement(
          'button',
          { className: 'c-messenger__submit' },
          _react2.default.createElement('i', { className: 'icon-send' })
        )
      );
    }
  }, {
    key: 'toggleAttachment',
    value: function toggleAttachment() {
      this.setState({
        showAttachment: !this.state.showAttachment
      });
    }
  }]);
  return Messenger;
}(_react2.default.Component);

exports.default = Messenger;