'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.fetchChats = fetchChats;
exports.fetchChat = fetchChat;
exports.updateChat = updateChat;
exports.subscribeToChats = subscribeToChats;

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requestChats() {
  return {
    type: 'FETCH_CHATS'
  };
}

function receiveChats(chats) {
  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';

  return {
    type: 'FETCH_CHATS',
    receivedAt: Date.now(),
    chats: chats,
    status: status
  };
}

function getChatImage(chat, id) {
  return chat.image || chat.members.length == 2 && chat.members.filter(function (member) {
    return member.id != id;
  })[0].image;
}

function receiveChat(chat) {
  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';

  return {
    type: 'FETCH_CHAT',
    chat: chat,
    status: status
  };
}

function fetchChats() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(dispatch, getState) {
      var result, state;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(requestChats());
              _context.next = 3;
              return _config2.default.adapter.getChats();

            case 3:
              result = _context.sent;
              state = getState()[_config2.default.stateName];

              dispatch(receiveChats(result.chats.map(function (chat) {
                return (0, _assign2.default)({}, chat, { image: getChatImage(chat, state.meState.me.id) });
              })));

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
}

function fetchChat(id) {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(dispatch, getState) {
      var result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _config2.default.adapter.getChat(id);

            case 2:
              result = _context2.sent;

              dispatch(receiveChat(result.chat));

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
}

function updateChat(id, update) {
  return {
    type: 'UPDATE_CHAT',
    id: id,
    update: update
  };
}

function subscribeToChats(chatCallback) {
  _config2.default.adapter.subscribeToChats(chatCallback);
}