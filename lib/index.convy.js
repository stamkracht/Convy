'use strict';

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _registerServiceWorker = require('./register-service-worker.js');

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _convy = require('./convy');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// convyConfig.stateName = 'convy';
// convyConfig.urlPrefix = 'convy';
// convyConfig.adapter = new SlackAdapter();

// Use the react router
var loggerMiddleware = (0, _reduxLogger2.default)({
  predicate: function predicate(getState, action) {
    return true;
  }
});

// Imports needed for for Convy


// Imports for using redux


function configureStore() {
  var enhancer = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware
  // Other middleware
  ));
  var reducers = (0, _redux.combineReducers)((0, _defineProperty3.default)({}, _convy.convyConfig.stateName, _convy.convyReducers));

  return (0, _redux.createStore)(reducers, enhancer);
}

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: configureStore() },
  _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    (0, _convy.convyRoute)()
  )
), document.querySelector('.s-application'));