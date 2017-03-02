'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function headerReducer(state, action) {
  if (state === undefined) {
    state = {
      chatActive: false,
      myProfileActive: false,
      navMoreActive: false
    };
  }
  if (action.type === 'SET_MODE') {
    var newState = (0, _assign2.default)({}, state, {
      mode: action.mode,
      navMoreActive: false
    });

    return newState;
  }

  if (action.type === 'TOGGLE_NAV_MORE') {
    var _newState = (0, _assign2.default)({}, state, {
      navMoreActive: !state.navMoreActive
    });

    return _newState;
  }

  return state;
}

exports.default = headerReducer;