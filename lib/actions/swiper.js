'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSwipeViewIndex = setSwipeViewIndex;

var _reactRouter = require('react-router');

function setSwipeViewIndex(swipeViewId, swipeViewIndex) {
  console.info('Set swipe view index.');

  return {
    type: 'SET_SWIPE_VIEW_INDEX',
    swipeViewId: swipeViewId,
    swipeViewIndex: swipeViewIndex
  };
}