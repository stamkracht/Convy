'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _adapterMock = require('./test/adapter-mock');

var _adapterMock2 = _interopRequireDefault(_adapterMock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Config = function Config() {
  (0, _classCallCheck3.default)(this, Config);

  this.urlPrefix = '/';
  this.adapter = new _adapterMock2.default();
  this.stateName = 'convy';
};

exports.default = new Config();