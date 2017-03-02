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

var Authentication = function (_React$Component) {
  (0, _inherits3.default)(Authentication, _React$Component);

  function Authentication(props) {
    (0, _classCallCheck3.default)(this, Authentication);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Authentication.__proto__ || (0, _getPrototypeOf2.default)(Authentication)).call(this, props));

    _this.state = {
      connecting: false
    };
    return _this;
  }

  (0, _createClass3.default)(Authentication, [{
    key: 'render',
    value: function render() {
      var authenticationClass = 'c-authentication c-authentication--vertical';
      var connectClass = void 0;

      if (this.props.showRegister) {
        authenticationClass += ' state-register';
      }

      if (this.state.connecting) {
        connectClass = 'state-loading';
      }

      return _react2.default.createElement(
        'section',
        { className: authenticationClass },
        _react2.default.createElement(
          'section',
          { className: 'c-authentication__inner' },
          _react2.default.createElement(
            'article',
            { className: 'c-authentication__front' },
            _react2.default.createElement(
              'form',
              null,
              _react2.default.createElement(
                'div',
                { className: 'c-authentication__fields' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'email', name: 'email', placeholder: 'email', required: true })
                ),
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'password', name: 'password', placeholder: 'password', required: true })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'c-authentication__submit' },
                _react2.default.createElement(
                  'button',
                  { className: connectClass, onClick: this.connect.bind(this) },
                  'Connect'
                )
              )
            )
          ),
          _react2.default.createElement(
            'article',
            { className: 'c-authentication__back' },
            _react2.default.createElement(
              'form',
              null,
              _react2.default.createElement(
                'div',
                { className: 'c-authentication__fields' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'email', name: 'email', placeholder: 'email', required: true })
                ),
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'password', name: 'password', placeholder: 'password', required: true })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'c-authentication__submit' },
                _react2.default.createElement(
                  'span',
                  { onClick: this.props.hideRegister },
                  _react2.default.createElement('i', { className: 'icon-arrow-back' })
                ),
                _react2.default.createElement(
                  'button',
                  null,
                  'Register'
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: 'connect',
    value: function connect() {
      this.setState({
        connecting: true
      });
    }
  }]);
  return Authentication;
}(_react2.default.Component);

Authentication.propTypes = {
  showRegister: _react2.default.PropTypes.bool,
  hideRegister: _react2.default.PropTypes.func
};

exports.default = Authentication;