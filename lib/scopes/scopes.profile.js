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

var _components = require('../components/components.profile-summary');

var _components2 = _interopRequireDefault(_components);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Profile = function (_React$Component) {
  (0, _inherits3.default)(Profile, _React$Component);

  function Profile() {
    (0, _classCallCheck3.default)(this, Profile);
    return (0, _possibleConstructorReturn3.default)(this, (Profile.__proto__ || (0, _getPrototypeOf2.default)(Profile)).apply(this, arguments));
  }

  (0, _createClass3.default)(Profile, [{
    key: 'render',
    value: function render() {
      var user = this.props.isRoot ? this.props.meState.me : this.props.user;
      return _react2.default.createElement(
        'section',
        { className: 's-profile' },
        this.props.meState.isFetching ? _react2.default.createElement(
          'div',
          null,
          'Loader thingy'
        ) : _react2.default.createElement(_components2.default, { user: user })
      );
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.isRoot) {
        this.props.setProfileHeader();
      }
    }
  }]);
  return Profile;
}(_react2.default.Component);

Profile.defaultProps = {
  isRoot: true
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return state[_config2.default.stateName];
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    setProfileHeader: function setProfileHeader() {
      dispatch(_actions2.default.header.setMode('PROFILE'));
    }
  };
};

var ProfileConnect = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Profile);

exports.default = ProfileConnect;