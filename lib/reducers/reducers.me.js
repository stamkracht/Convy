'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function meReducer(state, action) {
  if (state === undefined) {
    state = {
      isFetching: false,
      me: null,
      receivedAt: null
    };
  }

  if (action.type === 'FETCH_ME') {
    if (!action.status) {
      return (0, _assign2.default)({}, state, {
        isFetching: true
      });
    } else if (action.status == 'success') {
      return (0, _assign2.default)({}, state, {
        isFetching: false,
        me: action.me,
        receivedAt: action.receivedAt
      });
    }
  }

  return state;
}

exports.default = meReducer;