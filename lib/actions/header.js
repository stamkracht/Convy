'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMode = setMode;
exports.toggleNavMore = toggleNavMore;
function setMode(mode) {
  console.info('Set header mode', mode);

  return {
    mode: mode,
    type: 'SET_MODE'
  };
}

function toggleNavMore() {
  console.info('Toggle the nav-more navigation.');

  return {
    type: 'TOGGLE_NAV_MORE'
  };
}