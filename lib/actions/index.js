'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chats = require('./chats');

var chats = _interopRequireWildcard(_chats);

var _contacts = require('./contacts');

var contacts = _interopRequireWildcard(_contacts);

var _me = require('./me');

var me = _interopRequireWildcard(_me);

var _header = require('./header');

var header = _interopRequireWildcard(_header);

var _swiper = require('./swiper');

var swiper = _interopRequireWildcard(_swiper);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  chats: chats,
  contacts: contacts,
  me: me,
  header: header,
  swiper: swiper
};