'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.fetchContacts = fetchContacts;
exports.fetchContact = fetchContact;

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requestContacts() {
  return {
    type: 'FETCH_CONTACTS'
  };
}

function receiveContacts(contacts) {
  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';

  return {
    type: 'FETCH_CONTACTS',
    receivedAt: Date.now(),
    contacts: contacts,
    status: status
  };
}

function receiveContact(contact) {
  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';

  return {
    type: 'FETCH_CONTACT',
    contact: contact,
    status: status
  };
}

function fetchContacts() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(dispatch, getState) {
      var result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(requestContacts());
              _context.next = 3;
              return _config2.default.adapter.getContacts();

            case 3:
              result = _context.sent;

              dispatch(receiveContacts(result.contacts));

            case 5:
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

function fetchContact(id) {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(dispatch, getState) {
      var result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _config2.default.adapter.getContact(id);

            case 2:
              result = _context2.sent;

              dispatch(receiveContact(result.contact));

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