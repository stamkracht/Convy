'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Adapter = function () {
  function Adapter() {
    var _this = this;

    (0, _classCallCheck3.default)(this, Adapter);

    this.chatSubscribers = [];

    // Generate dummy updates
    setInterval(function () {
      _this.chatSubscribers.forEach(function (callback) {
        var chatId = getRandom(chats.chats.map(function (chat) {
          return chat.id;
        }));
        var chat = getById(chats.chats, chatId);
        chat.unreadMessagesCount++;
        callback(chatId, {
          lastMessageAt: new Date().toISOString(),
          unreadMessagesCount: chat.unreadMessagesCount,
          lastMessage: chat.unreadMessagesCount + ': ' + chat.lastMessage
        });
      });
    }, 5000);
  }

  (0, _createClass3.default)(Adapter, [{
    key: 'getMe',
    value: function getMe() {
      return new _promise2.default(function (resolve, reject) {
        setTimeout(function () {
          resolve(me);
        }, 1000);
      });
    }
  }, {
    key: 'getChats',
    value: function getChats() {
      return new _promise2.default(function (resolve, reject) {
        setTimeout(function () {
          resolve(chats);
        }, 1000);
      });
    }
  }, {
    key: 'getChat',
    value: function getChat(id) {
      return new _promise2.default(function (resolve, reject) {
        setTimeout(function () {
          resolve({
            status: 'success',
            chat: chats.chats.filter(function (chat) {
              return chat.id == id;
            })[0]
          });
        }, 1000);
      });
    }
  }, {
    key: 'getContacts',
    value: function getContacts() {
      return new _promise2.default(function (resolve, reject) {
        setTimeout(function () {
          resolve(contacts);
        }, 1000);
      });
    }
  }, {
    key: 'getContact',
    value: function getContact(id) {
      return new _promise2.default(function (resolve, reject) {
        setTimeout(function () {
          resolve({
            status: 'success',
            contact: contacts.contacts.filter(function (contact) {
              return contact.id == id;
            })[0]
          });
        }, 1000);
      });
    }
  }, {
    key: 'subscribeToChats',
    value: function subscribeToChats(callback) {
      var _this2 = this;

      this.chatSubscribers.push(callback);
      return {
        cancel: function cancel() {
          var index = _this2.chatSubscribers.indexOf(callback);
          if (index != -1) {
            _this2.chatSubscribers.splice(index, 1);
          }
        }
      };
    }
  }]);
  return Adapter;
}();

exports.default = Adapter;


function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function getById(list, id) {
  return list.filter(function (item) {
    return item.id == id;
  })[0];
}

var me = { status: 'success', user: {
    id: 3,
    firstname: 'Peter II',
    lastname: 'Fox',
    headline: 'Lead Developer @ Stamkracht',
    image: 'https://profilepicture.jpg',
    email: 'example@example.org',
    phone: '0987654321',
    twitterHandle: 'everybodylovesmartha',
    location: {
      address: 'Oostenburgervoorstraat 72',
      zipcode: '1018 MR',
      city: 'Amsterdam',
      country: 'Nederland'
    }
  } };

var chats = { status: 'success', chats: [{
    id: 1,
    title: 'A love story',
    image: null,
    members: [{
      id: 2,
      name: 'John Graham',
      image: 'http://placehold.it/50x50'
    }, {
      id: 3,
      name: 'Peter Fox',
      image: 'http://placehold.it/50x50'
    }],
    lastMessage: 'Ik kan er maar niet aan wennen',
    lastMessageAt: '2017-02-28T17:37:53.227Z',
    unreadMessagesCount: 7
  }, {
    id: 2,
    title: 'A horror story',
    image: 'http://placehold.it/50x50',
    members: [{
      id: 1,
      name: 'George Best',
      image: 'http://placehold.it/50x50'
    }, {
      id: 3,
      name: 'Peter Fox',
      image: 'http://placehold.it/50x50'
    }],
    lastMessage: 'Ik kan er maar niet aan vastzitten',
    lastMessageAt: '2017-02-27T17:37:53.227Z',
    unreadMessagesCount: 7
  }, {
    id: 3,
    title: 'A triangular story',
    image: 'http://placehold.it/50x50',
    members: [{
      id: 1,
      name: 'George Best',
      image: 'http://placehold.it/50x50'
    }, {
      id: 2,
      name: 'John Graham',
      image: 'http://placehold.it/50x50'
    }, {
      id: 3,
      name: 'Peter Fox',
      image: 'http://placehold.it/50x50'
    }],
    lastMessage: 'Samen',
    lastMessageAt: '2017-02-27T17:37:53.227Z',
    unreadMessagesCount: 7
  }] };

var contacts = { status: 'success', contacts: [{
    id: 2,
    firstname: 'John',
    lastname: 'Graham',
    headline: 'Lead Developer @ Stamkracht',
    image: 'https://profilepicture.jpg',
    email: 'example@example.org',
    phone: '0987654321',
    twitterHandle: 'everybodylovesmartha',
    location: {
      address: 'Oostenburgervoorstraat 72',
      zipcode: '1018 MR',
      city: 'Amsterdam',
      country: 'Nederland'
    },
    lastSeenAt: '2017-02-25T17:37:53.227Z'
  }, {
    id: 1,
    firstname: 'George',
    lastname: 'Best',
    headline: 'Lead Developer @ Stamkracht',
    image: 'https://profilepicture.jpg',
    email: 'example@example.org',
    phone: '0987654321',
    twitterHandle: 'everybodylovesmartha',
    location: {
      address: 'Oostenburgervoorstraat 72',
      zipcode: '1018 MR',
      city: 'Amsterdam',
      country: 'Nederland'
    },
    lastSeenAt: '2017-02-22T17:37:53.227Z'
  }] };