'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _index = require('./reducers/index.reducers');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggerMiddleware = (0, _reduxLogger2.default)({
    predicate: function predicate(getState, action) {
        return true;
    }
});

exports.default = function (reducers) {
    var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var middleware = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    var enhancer = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, [_reduxThunk2.default, loggerMiddleware].concat((0, _toConsumableArray3.default)(middleware))));
    return (0, _redux.createStore)((0, _index2.default)(reducers), initialState, enhancer);
};