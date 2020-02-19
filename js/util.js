'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var getRandomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  window.util = {
    isEnterKey: function (evt) {
      return evt.key === ENTER_KEY;
    },

    isEscKey: function (evt) {
      return evt.key === ESC_KEY;
    },

    getRandomInteger: getRandomInteger,

    getRandomArrayElement: function (array) {
      return array[getRandomInteger(0, array.length)];
    },
  };

})();
