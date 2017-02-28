import { browserHistory } from 'react-router';

export function setSwipeViewIndex(swipeViewId, swipeViewIndex, url_path) {
  console.info('Set swipe view index.');

  if (url_path || url_path === '') {
    console.log('Replace url in browser history.', url_path);
    browserHistory.replace(url_path);

    // Another option is to push the url so it is actually added in de browser history
    // browserHistory.push(url_path);
  }

  return {
    type: 'SET_SWIPE_VIEW_INDEX',
    swipeViewId,
    swipeViewIndex
  }
}
