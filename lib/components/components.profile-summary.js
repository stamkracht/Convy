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

var ProfileSummary = function (_React$Component) {
  (0, _inherits3.default)(ProfileSummary, _React$Component);

  function ProfileSummary() {
    (0, _classCallCheck3.default)(this, ProfileSummary);
    return (0, _possibleConstructorReturn3.default)(this, (ProfileSummary.__proto__ || (0, _getPrototypeOf2.default)(ProfileSummary)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProfileSummary, [{
    key: "_renderTwitterHandle",
    value: function _renderTwitterHandle(twitterHandle) {
      var url = "https://twitter.com/" + twitterHandle;
      return _react2.default.createElement(
        "a",
        { href: url },
        "twitter.com/",
        twitterHandle
      );
    }
  }, {
    key: "render",
    value: function render() {
      var user = this.props.user;

      return _react2.default.createElement(
        "section",
        { className: "c-profile-summary" },
        _react2.default.createElement(
          "article",
          { className: "c-profile-summary__img" },
          _react2.default.createElement("img", { src: "http://lorempixel.com/300/300/business/" })
        ),
        _react2.default.createElement(
          "article",
          { className: "c-profile-summary__info" },
          _react2.default.createElement(
            "p",
            { className: "c-profile-summary__data" },
            "last seen 18:08"
          ),
          _react2.default.createElement(
            "h1",
            { className: "c-profile-summary__name" },
            user.firstname,
            " ",
            user.lastname
          ),
          _react2.default.createElement(
            "h2",
            { className: "c-profile-summary__function" },
            user.headline
          ),
          _react2.default.createElement(
            "ul",
            { className: "c-profile-summary__contact" },
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "#" },
                user.email
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "#" },
                user.phone
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              this._renderTwitterHandle(user.twitterHandle)
            )
          ),
          _react2.default.createElement(
            "ul",
            { className: "c-profile-summary__location" },
            _react2.default.createElement(
              "li",
              null,
              user.location.address
            ),
            _react2.default.createElement(
              "li",
              null,
              user.location.zipcode,
              ", ",
              user.location.city
            ),
            _react2.default.createElement(
              "li",
              null,
              user.location.country
            )
          )
        ),
        _react2.default.createElement(
          "article",
          { className: "c-profile-summary__stats" },
          _react2.default.createElement(
            "ul",
            null,
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "span",
                null,
                _react2.default.createElement("i", { className: "icon-add-circle-outline" })
              ),
              _react2.default.createElement(
                "span",
                null,
                "384"
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "span",
                null,
                _react2.default.createElement("i", { className: "icon-pencil" })
              ),
              _react2.default.createElement(
                "span",
                null,
                "189"
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "span",
                null,
                _react2.default.createElement("i", { className: "icon-favorite-outline" })
              ),
              _react2.default.createElement(
                "span",
                null,
                "95"
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "span",
                null,
                _react2.default.createElement("i", { className: "icon-message-outline" })
              ),
              _react2.default.createElement(
                "span",
                null,
                "114"
              )
            )
          )
        )
      );
    }

    // functions.

  }]);
  return ProfileSummary;
}(_react2.default.Component);

exports.default = ProfileSummary;