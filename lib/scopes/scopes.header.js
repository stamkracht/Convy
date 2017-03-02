'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactRedux = require('react-redux');

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _utillities = require('../utillities');

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _components = require('../components/components.nav-more');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var navigation = void 0;
      var headerClass = void 0;
      var logoClass = void 0;
      var backButtonClass = void 0;

      if (this.props.headerState.mode == 'CHAT') {
        navigation = _react2.default.createElement(NavChat, (0, _extends3.default)({}, this.props, { key: 'nav-chat' }));
        headerClass = 's-header state-active';
        logoClass = 'logo';
        backButtonClass = 'back-button state-active';
      } else if (this.props.headerState.mode == 'PROFILE') {
        headerClass = 's-header state-active';
        logoClass = 'logo';
        backButtonClass = 'back-button state-active';
      } else {
        navigation = _react2.default.createElement(NavMain, (0, _extends3.default)({}, this.props, { key: 'nav-main' }));
        headerClass = 's-header';
        logoClass = 'logo state-active';
        backButtonClass = 'back-button';
      }

      return _react2.default.createElement(
        'header',
        { className: headerClass },
        _react2.default.createElement(
          'div',
          { className: 'icon' },
          _react2.default.createElement('img', { className: logoClass, src: '/dest/text-icon.png', alt: 'Convy icon', width: '30', height: '30' }),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/', className: backButtonClass },
            _react2.default.createElement('i', { className: 'icon-arrow-back' })
          )
        ),
        _react2.default.createElement('span', { className: 'seperator' }),
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            transitionName: 'state',
            transitionEnterTimeout: 800,
            transitionLeaveTimeout: 300
          },
          navigation
        ),
        _react2.default.createElement(_components2.default, { active: this.props.headerState.navMoreActive, toggle: this.props.toggleNavMore })
      );
    }
  }]);
  return Header;
}(_react2.default.Component);

var NavMain = function (_React$Component2) {
  (0, _inherits3.default)(NavMain, _React$Component2);

  function NavMain() {
    (0, _classCallCheck3.default)(this, NavMain);
    return (0, _possibleConstructorReturn3.default)(this, (NavMain.__proto__ || (0, _getPrototypeOf2.default)(NavMain)).apply(this, arguments));
  }

  (0, _createClass3.default)(NavMain, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'nav',
        { className: 'c-nav-main' },
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.IndexLink,
              {
                className: (0, _utillities.conditionalClasses)({ 'c-nav-main__button': true, 'state-active': this.props.swipeViewState['mainSwipeView'] == 0 }),
                onClick: function onClick() {
                  return _this3.props.setMainSwipeViewIndex(0);
                }
              },
              'Chats'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              {
                className: (0, _utillities.conditionalClasses)({ 'c-nav-main__button': true, 'state-active': this.props.swipeViewState['mainSwipeView'] == 1 }),
                onClick: function onClick() {
                  return _this3.props.setMainSwipeViewIndex(1);
                }
              },
              'Contacts'
            )
          )
        )
      );
    }
  }]);
  return NavMain;
}(_react2.default.Component);

var NavChat = function (_React$Component3) {
  (0, _inherits3.default)(NavChat, _React$Component3);

  function NavChat() {
    (0, _classCallCheck3.default)(this, NavChat);
    return (0, _possibleConstructorReturn3.default)(this, (NavChat.__proto__ || (0, _getPrototypeOf2.default)(NavChat)).apply(this, arguments));
  }

  (0, _createClass3.default)(NavChat, [{
    key: 'render',
    value: function render() {
      var _this5 = this;

      return _react2.default.createElement(
        'nav',
        { className: 'c-nav-main c-nav-main--chat' },
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              {
                className: (0, _utillities.conditionalClasses)({ 'c-nav-main__button c-nav-main__button--chat': true, 'state-active': this.props.swipeViewState['conversationSwipeView'] == 0 }),
                onClick: function onClick() {
                  return _this5.props.setConversationSwipeViewIndex(0);
                }
              },
              _react2.default.createElement('i', { className: 'icon-message' })
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              {
                className: (0, _utillities.conditionalClasses)({ 'c-nav-main__button c-nav-main__button--profile': true, 'state-active': this.props.swipeViewState['conversationSwipeView'] == 1 }),
                onClick: function onClick() {
                  return _this5.props.setConversationSwipeViewIndex(1);
                }
              },
              _react2.default.createElement('i', { className: 'icon-person' })
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              {
                className: (0, _utillities.conditionalClasses)({ 'c-nav-main__button c-nav-main__button--charts': true, 'state-active': this.props.swipeViewState['conversationSwipeView'] == 2 }),
                onClick: function onClick() {
                  return _this5.props.setConversationSwipeViewIndex(2);
                }
              },
              _react2.default.createElement('i', { className: 'icon-bar-chart' })
            )
          )
        )
      );
    }
  }]);
  return NavChat;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return state[_config2.default.stateName];
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleNavMore: function toggleNavMore() {
      dispatch(_actions2.default.header.toggleNavMore());
    },

    setMainSwipeViewIndex: function setMainSwipeViewIndex(index) {
      dispatch(_actions2.default.swiper.setSwipeViewIndex('mainSwipeView', index));
    },

    setConversationSwipeViewIndex: function setConversationSwipeViewIndex(index) {
      dispatch(_actions2.default.swiper.setSwipeViewIndex('conversationSwipeView', index));
    }
  };
};

var HeaderConnect = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);

exports.default = HeaderConnect;