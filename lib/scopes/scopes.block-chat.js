"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockChat = function (_React$Component) {
  (0, _inherits3.default)(BlockChat, _React$Component);

  function BlockChat() {
    (0, _classCallCheck3.default)(this, BlockChat);
    return (0, _possibleConstructorReturn3.default)(this, (BlockChat.__proto__ || (0, _getPrototypeOf2.default)(BlockChat)).apply(this, arguments));
  }

  (0, _createClass3.default)(BlockChat, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "s-block-chat" },
        _react2.default.createElement(
          "div",
          { className: "s-block-chat__header" },
          _react2.default.createElement(
            "p",
            null,
            "Unread messages"
          ),
          _react2.default.createElement(
            "ul",
            { className: "s-block-chat__data" },
            _react2.default.createElement(
              "li",
              null,
              "31 augustus"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "s-block-chat__main" },
          _react2.default.createElement(
            "article",
            { className: "c-message" },
            _react2.default.createElement(
              "h1",
              { className: "c-message__contact-name" },
              "Vincent"
            ),
            _react2.default.createElement(
              "p",
              null,
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ab minima aspernatur molestiae consectetur minus, deleniti laborum rem delectus pariatur, odio esse necessitatibus veniam commodi fuga optio temporibus a iste cupiditate quidem quo voluptates adipisci, illo ea! Veniam, debitis aspernatur, amet ullam et consequuntur aliquam quo magni, obcaecati accusantium nostrum."
            ),
            _react2.default.createElement(
              "ul",
              { className: "c-message__data" },
              _react2.default.createElement(
                "li",
                null,
                "17:40"
              )
            )
          ),
          _react2.default.createElement(
            "article",
            { className: "c-message" },
            _react2.default.createElement(
              "h1",
              { className: "c-message__contact-name" },
              "Paul"
            ),
            _react2.default.createElement(
              "p",
              null,
              "Lorem!"
            ),
            _react2.default.createElement(
              "ul",
              { className: "c-message__data" },
              _react2.default.createElement(
                "li",
                null,
                "17:48"
              )
            )
          ),
          _react2.default.createElement(
            "article",
            { className: "c-message c-message--user" },
            _react2.default.createElement(
              "p",
              null,
              "Provident error ipsa non sapiente alias voluptatem earum, mollitia totam ut harum."
            ),
            _react2.default.createElement(
              "ul",
              { className: "c-message__data" },
              _react2.default.createElement(
                "li",
                null,
                "17:49"
              )
            )
          )
        )
      );
    }

    // functions.

  }]);
  return BlockChat;
}(_react2.default.Component);

exports.default = BlockChat;