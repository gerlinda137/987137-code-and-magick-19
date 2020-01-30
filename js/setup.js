'use strict';

var MAGES_AMOUNT = 4;

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

// showed up set-up window
var setUp = document.querySelector('.setup');
setUp.classList.remove('hidden');

//  general random function
var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

// getting random element from array
var getRandomArrayElement = function (array) {
  var arrayIndex = getRandomInt(0, array.length - 1);
  return array[arrayIndex];
};

//  getting the name of mage
var nameConcatenation = function () {
  return getRandomArrayElement(FIRST_NAMES) + ' ' + getRandomArrayElement(SURNAMES);
};

// creating object

var createMageFeatures = function () {
  var mageFeatures = {
    name: nameConcatenation(),
    coatColor: getRandomArrayElement(COAT_COLORS),
    eyesColor: getRandomArrayElement(EYES_COLORS),
  };
  return mageFeatures;
};

//  creating mage array
var mages = [];
for (var i = 0; i < MAGES_AMOUNT; i++) {
  mages.push(createMageFeatures());
}

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
var fragment = document.createDocumentFragment();
for (var j = 0; j < mages.length; j++) {
  fragment.appendChild(renderWizard(mages[j]));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

