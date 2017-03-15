export function setMode(mode) {
  console.info('Set header mode', mode);

  return {
    mode: mode,
    type: 'SET_MODE',
  }
}

export function toggleNavMore() {
  console.info('Toggle the nav-more navigation.');

  return {
    type: 'TOGGLE_NAV_MORE',
  }
}
