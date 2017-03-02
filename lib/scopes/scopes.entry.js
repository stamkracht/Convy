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

var _components = require('../components/components.authentication');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Entry = function (_React$Component) {
  (0, _inherits3.default)(Entry, _React$Component);

  function Entry(props) {
    (0, _classCallCheck3.default)(this, Entry);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Entry.__proto__ || (0, _getPrototypeOf2.default)(Entry)).call(this, props));

    _this.state = {
      showRegister: false
    };
    return _this;
  }

  (0, _createClass3.default)(Entry, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'main',
        { className: 's-entry' },
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          _react2.default.createElement('img', { src: 'dest/text-logo.png', alt: 'Convy logo', width: '284', height: '73' })
        ),
        _react2.default.createElement(_components2.default, { showRegister: this.state.showRegister, hideRegister: this.hideRegister.bind(this) }),
        _react2.default.createElement(
          'button',
          { className: 'register-trigger', onClick: this.showRegister.bind(this) },
          'Not registered? Create account.'
        )
      );
    }
  }, {
    key: 'showRegister',
    value: function showRegister() {
      this.setState({
        showRegister: true
      });
    }
  }, {
    key: 'hideRegister',
    value: function hideRegister() {
      this.setState({
        showRegister: false
      });
    }
  }]);
  return Entry;
}(_react2.default.Component);

exports.default = Entry;