(function(){

  'use strict';


  if (document.querySelector('.s-header')) {
    let trigger = document.querySelector('.js-trigger'),
        header = document.querySelector('.s-header'),
        navChat = document.querySelector('.js-nav-main-chat');

    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      header.classList.toggle('state-chat');
      navChat.classList.toggle('state-active');
    });
  }


})();
