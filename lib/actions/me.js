'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.fetchMe = fetchMe;

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requestMe() {
  return {
    type: 'FETCH_ME'
  };
}

function receiveMe(me) {
  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';

  return {
    type: 'FETCH_ME',
    receivedAt: Date.now(),
    me: me,
    status: status
  };
}

function fetchMe() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(dispatch, getState) {
      var result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(requestMe());
              console.log('Started fetching me');
              _context.next = 4;
              return _config2.default.adapter.getMe();

            case 4:
              result = _context.sent;

              dispatch(receiveMe(result.user));
              console.log('Finished fetching me');

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
}