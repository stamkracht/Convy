(function(){

  'use strict';


  if (document.querySelector('.c-messenger')) {
    let attachmentTrigger = document.querySelector('.js-messenger-attachment');

    attachmentTrigger.addEventListener('click', function (e) {
      this.classList.toggle('state-active');
    });

  }


})();
