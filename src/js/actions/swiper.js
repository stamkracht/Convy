import { browserHistory } from 'react-router';

export function setSwipeViewIndex(swipeViewId, swipeViewIndex) {
  console.info('Set swipe view index.');

  return {
    type: 'SET_SWIPE_VIEW_INDEX',
    swipeViewId,
    swipeViewIndex
  }
}
