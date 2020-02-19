'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var defaultSetupCoordinates = {
    x: setup.style.left,
    y: setup.style.top
  };

  var setupNameInput = setup.querySelector('.setup-user-name');
  var onPopupEscPress = function (evt) {
    if (window.util.isEscKey(evt) && setupNameInput !== document.activeElement) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    setup.style.top = defaultSetupCoordinates.y;
    setup.style.left = defaultSetupCoordinates.x;
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (window.util.isEnterKey(evt)) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (window.util.isEnterKey(evt)) {
      closePopup();
    }
  });

})();

