'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function chatsReducer(state, action) {
  if (state === undefined) {
    state = {
      isFetching: false,
      chats: {},
      chatList: [],
      receivedAt: null
    };
  }

  if (action.type === 'FETCH_CHATS') {
    if (!action.status) {
      return (0, _assign2.default)({}, state, {
        isFetching: true
      });
    } else if (action.status == 'success') {
      // Update the dictionary and list
      var _action$chats$reduce = action.chats.reduce(function (a, b) {
        return [(0, _assign2.default)({}, a[0], (0, _defineProperty3.default)({}, b.id, b)), [b.id].concat(a[1])];
      }, [{}, []]),
          _action$chats$reduce2 = (0, _slicedToArray3.default)(_action$chats$reduce, 2),
          chats = _action$chats$reduce2[0],
          chatList = _action$chats$reduce2[1];

      return (0, _assign2.default)({}, state, {
        isFetching: false,
        receivedAt: action.receivedAt,
        chats: chats,
        chatList: chatList
      });
    }
  }
  if (action.type === 'FETCH_CHAT') {
    if (action.status == 'success') {
      // Set the chat in the dictionary
      return (0, _assign2.default)({}, state, {
        chats: (0, _assign2.default)({}, state.chats, (0, _defineProperty3.default)({}, action.chat.id, action.chat))
      });
    }
  }
  if (action.type === 'UPDATE_CHAT') {
    // Update the chat in the dictionary
    return (0, _assign2.default)({}, state, {
      chats: (0, _assign2.default)({}, state.chats, (0, _defineProperty3.default)({}, action.id, (0, _assign2.default)({}, state.chats[action.id], action.update)))
    });
  }

  return state;
}

exports.default = chatsReducer;