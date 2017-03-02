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

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwipeView = function (_React$Component) {
  (0, _inherits3.default)(SwipeView, _React$Component);

  function SwipeView(props) {
    (0, _classCallCheck3.default)(this, SwipeView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SwipeView.__proto__ || (0, _getPrototypeOf2.default)(SwipeView)).call(this, props));

    _this.viewLength = props.children.length;

    _this.state = {
      offset: props.swipeViewIndex * 100,
      animEnabled: true,
      currentIndex: props.swipeViewIndex
    };
    return _this;
  }

  (0, _createClass3.default)(SwipeView, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.setSwipeViewIndex(this.props.swipeViewIndex);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // Will be triggered when the redux state is changed
      if (this.state.currentIndex != nextProps.swipeViewIndex) {
        this.setState({
          animEnabled: true,
          currentIndex: nextProps.swipeViewIndex,
          offset: 100 * nextProps.swipeViewIndex
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = { transform: 'translate(' + -this.state.offset + 'vw, 0)' };

      if (this.state.animEnabled) {
        styles.transition = 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s';
      }

      return _react2.default.createElement(
        'div',
        { className: 's-swipe-view',
          style: styles,
          onTouchStart: this.startSwipe.bind(this),
          onTouchMove: this.moveSwipe.bind(this),
          onTouchEnd: this.endSwipe.bind(this)
        },
        this.props.children
      );
    }
  }, {
    key: 'startSwipe',
    value: function startSwipe(event) {
      console.info('Start swiping.');

      this.setState({
        animEnabled: false,
        clientX: event.nativeEvent.touches[0].clientX,
        initialOffset: this.state.offset
      });
    }
  }, {
    key: 'moveSwipe',
    value: function moveSwipe(event) {
      var oldClientX = this.state.clientX,
          newClientX = event.nativeEvent.touches[0].clientX,
          difference = newClientX - oldClientX,
          acceleration = 0.3,
          speed = 0.1;

      // acceleration, is the rate of change of the speed of something in a given direction (velocity).
      // speed is the rate of motion, or the rate of change of position, it is a scalar quantity.
      var offset = this.state.offset - Math.pow(Math.abs(difference), acceleration) * (difference * speed);

      var minOffset = void 0,
          maxOffset = void 0;

      if (this.props.multipleViewsPerSwipe) {
        minOffset = 0;
        maxOffset = (this.viewLength - 1) * 100;
      } else {
        minOffset = Math.max(0, this.state.initialOffset - 100);
        maxOffset = Math.min((this.viewLength - 1) * 100, this.state.initialOffset + 100);
      }

      if (offset < minOffset) {
        offset = minOffset;
      } else if (offset > maxOffset) {
        offset = maxOffset;
      }

      this.setState({
        offset: offset,
        clientX: newClientX
      });
    }
  }, {
    key: 'endSwipe',
    value: function endSwipe(event) {
      var _this2 = this;

      var offsetCurrentView = this.state.offset % 100;

      // if offset current view is greater than 50, then swipe to next view.
      // else swipe back to the beginning of the current view.
      var offset = offsetCurrentView > 50 ? this.state.offset - offsetCurrentView + 100 : this.state.offset - offsetCurrentView;

      var oldIndex = this.state.currentIndex;
      var currentIndex = offset / 100;

      this.setState({
        animEnabled: true,
        offset: offset,
        currentIndex: currentIndex
      }, function () {
        if (oldIndex != currentIndex) {
          // Set the redux state
          _this2.props.setSwipeViewIndex(currentIndex);
        }
      });
    }
  }]);
  return SwipeView;
}(_react2.default.Component);

SwipeView.propTypes = {
  children: _react2.default.PropTypes.array,
  multipleViewsPerSwipe: _react2.default.PropTypes.bool
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    swipeViewIndex: state[_config2.default.stateName].swipeViewState[ownProps.swipeViewId] || 0
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    setSwipeViewIndex: function setSwipeViewIndex(index) {
      dispatch(_actions2.default.swiper.setSwipeViewIndex(ownProps.swipeViewId, index));
    }
  };
};

var SwipeViewConnect = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SwipeView);

exports.default = SwipeViewConnect;