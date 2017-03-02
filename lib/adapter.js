'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _adapterMock = require('./test/adapter-mock');

var _adapterMock2 = _interopRequireDefault(_adapterMock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// You can import a real adapter here that will be used for the communication with backend

exports.default = new _adapterMock2.default();