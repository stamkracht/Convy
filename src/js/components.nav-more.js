(function(){

  'use strict';


  let navMoreButton = document.querySelector('.js-nav-more-button'),
      navMoreDropdown = document.querySelector('.js-nav-more-dropdown');

  // toggling the dropdown nav on and off by pressing the nav-more button.
  navMoreButton.addEventListener('click', function (e) {
    e.preventDefault();
    navMoreDropdown.classList.toggle('state-active');
  });


})();
