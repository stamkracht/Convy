'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function swipeViewReducer(state, action) {
  if (state === undefined) {
    state = {};
  }

  if (action.type === 'SET_SWIPE_VIEW_INDEX') {
    var newState = (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, action.swipeViewId, action.swipeViewIndex));

    return newState;
  }

  return state;
}

exports.default = swipeViewReducer;