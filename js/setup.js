'use strict';

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

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
];

//  general random function
var getRandomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

// getting random element from array
var getRandomArrayElement = function (array) {
  return array[getRandomInteger(0, array.length)];
};

//  getting the name of mage
var getRandomName = function () {
  return getRandomArrayElement(FIRST_NAMES) + ' ' + getRandomArrayElement(SURNAMES);
};

// creating object

var generateMages = function () {
  return {
    name: getRandomName(),
    coatColor: getRandomArrayElement(COAT_COLORS),
    eyesColor: getRandomArrayElement(EYES_COLORS),
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
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var setupName = document.querySelector('.setup-user-name');
var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && setupName !== document.activeElement) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var setUpWizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var inputCoatColor = document.querySelector('.setup-wizard-appearance input[name=coat-color]');
setUpWizardCoat.addEventListener('click', function () {
  var generatedCoatColor = getRandomArrayElement(COAT_COLORS);
  setUpWizardCoat.style.fill = generatedCoatColor;
  inputCoatColor.value = generatedCoatColor;
});

var setUpWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var inputEyesColor = document.querySelector('.setup-wizard-appearance input[name=eyes-color]');
setUpWizardEyes.addEventListener('click', function () {
  var generatedEyesColor = getRandomArrayElement(EYES_COLORS);
  setUpWizardEyes.style.fill = generatedEyesColor;
  inputEyesColor.value = generatedEyesColor;
});

var setUpFireball = document.querySelector('.setup-fireball-wrap');
var inputFireballColor = document.querySelector('.setup-fireball-wrap input[name=fireball-color]');
setUpFireball.addEventListener('click', function () {
  var generateFireballColor = getRandomArrayElement(FIREBALL_COLORS);
  setUpFireball.style.background = generateFireballColor;
  inputFireballColor.value = generateFireballColor;
});
