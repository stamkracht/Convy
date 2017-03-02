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

var _utillities = require('../utillities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavMore = function (_React$Component) {
  (0, _inherits3.default)(NavMore, _React$Component);

  function NavMore() {
    (0, _classCallCheck3.default)(this, NavMore);
    return (0, _possibleConstructorReturn3.default)(this, (NavMore.__proto__ || (0, _getPrototypeOf2.default)(NavMore)).apply(this, arguments));
  }

  (0, _createClass3.default)(NavMore, [{
    key: 'render',
    value: function render() {
      var dropdownClass = (0, _utillities.conditionalClasses)({
        'c-nav-more__dropdown': true,
        'state-active': this.props.active
      });

      return _react2.default.createElement(
        'nav',
        { className: 'c-nav-more' },
        _react2.default.createElement(
          'button',
          { className: 'c-nav-more__button', onClick: this.props.toggle },
          _react2.default.createElement('i', { className: 'icon-more' })
        ),
        _react2.default.createElement(
          'ul',
          { className: dropdownClass },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: 'my-profile' },
              _react2.default.createElement('i', { className: 'icon-person-outline' }),
              'Profile'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              _react2.default.createElement('i', { className: 'icon-notifications-none' }),
              'Notification settings'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              _react2.default.createElement('i', { className: 'icon-earth' }),
              'Platforms'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { className: 'sign-out', href: '#' },
              _react2.default.createElement('i', { className: 'icon-sign-out' }),
              'Logout'
            )
          )
        )
      );
    }
  }]);
  return NavMore;
}(_react2.default.Component);

exports.default = NavMore;