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

function contactsReducer(state, action) {
  if (state === undefined) {
    state = {
      isFetching: false,
      contactList: [],
      contacts: {},
      receivedAt: null
    };
  }

  if (action.type === 'FETCH_CONTACTS') {
    if (!action.status) {
      return (0, _assign2.default)({}, state, {
        isFetching: true
      });
    } else if (action.status == 'success') {
      // Update the dictionary and list
      var _action$contacts$redu = action.contacts.reduce(function (a, b) {
        return [(0, _assign2.default)({}, a[0], (0, _defineProperty3.default)({}, b.id, b)), [b.id].concat(a[1])];
      }, [{}, []]),
          _action$contacts$redu2 = (0, _slicedToArray3.default)(_action$contacts$redu, 2),
          contacts = _action$contacts$redu2[0],
          contactList = _action$contacts$redu2[1];

      return (0, _assign2.default)({}, state, {
        isFetching: false,
        receivedAt: action.receivedAt,
        contacts: contacts,
        contactList: contactList
      });
    }
  }

  if (action.type === 'FETCH_CONTACT') {
    if (action.status == 'success') {
      // Set the contact in the dictionary
      return (0, _assign2.default)({}, state, {
        contacts: (0, _assign2.default)({}, state.contacts, (0, _defineProperty3.default)({}, action.contact.id, action.contact))
      });
    }
  }

  return state;
}

exports.default = contactsReducer;