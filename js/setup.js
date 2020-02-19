'use strict';

(function () {
  var MAGE_AMOUNT = 4;

  var FIRST_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон',
  ];

  var SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг',
  ];

  //  getting the name of mage
  var getRandomName = function () {
    return window.util.getRandomArrayElement(FIRST_NAMES) + ' ' + window.util.getRandomArrayElement(SURNAMES);
  };

  // creating object

  var generateMages = function () {
    return {
      name: getRandomName(),
      coatColor: window.util.getRandomArrayElement(window.colorize.coat),
      eyesColor: window.util.getRandomArrayElement(window.colorize.eyes)
    };
  };

  //  creating mage array
  var generateNumberOfMage = function () {
    var mages = [];
    for (var i = 0; i < MAGE_AMOUNT; i++) {
      mages.push(generateMages());
    }
    return mages;
  };
  var mages = generateNumberOfMage(MAGE_AMOUNT);

  // searching elements
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  // creating DOM element for mage
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  // appending rendered mages to DOM
  var renderMagesToDom = document.createDocumentFragment();
  for (var i = 0; i < mages.length; i++) {
    renderMagesToDom.appendChild(renderWizard(mages[i]));
  }
  similarListElement.appendChild(renderMagesToDom);

  document.querySelector('.setup-similar').classList.remove('hidden');

  // showed up set-up window
  var setup = document.querySelector('.setup');
  var setupPlayer = setup.querySelector('.setup-player');

  var wizardCoat = setupPlayer.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = setupPlayer.querySelector('.setup-wizard-appearance input[name=coat-color]');
  window.colorize.subscribe(wizardCoat, wizardCoatInput, window.colorize.coat);

  var wizardEyes = setupPlayer.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = setupPlayer.querySelector('.setup-wizard-appearance input[name=eyes-color]');
  window.colorize.subscribe(wizardEyes, wizardEyesInput, window.colorize.eyes);

  var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = setupPlayer.querySelector('.setup-fireball-wrap input[name=fireball-color]');
  window.colorize.subscribe(wizardFireball, wizardFireballInput, window.colorize.fireball);
})();
