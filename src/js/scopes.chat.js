(function(){

  'use strict';


  if (document.querySelector('.s-chat')) {
    let attachmentTrigger = document.querySelector('.js-chat-attachment');

    attachmentTrigger.addEventListener('click', function (e) {
      this.classList.toggle('state-active');
    });

  }


})();
