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

//  getting the name of mage
var generatedFirstName = function () {
  var firstNameIndex = getRandomInt(0, FIRST_NAMES.length - 1);
  return FIRST_NAMES[firstNameIndex];
};
var generatedSurname = function () {
  var surnameIndex = getRandomInt(0, SURNAMES.length - 1);
  return SURNAMES[surnameIndex];
};

var nameConcatenation = function () {
  return generatedFirstName() + ' ' + generatedSurname();
};

//  getting the coat color of mage

var generatedCoatColor = function () {
  var coatColorIndex = getRandomInt(0, COAT_COLORS.length - 1);
  return COAT_COLORS[coatColorIndex];
};

//  getting eyes' color of mage

var generatedEyeColor = function () {
  var eyeColorIndex = getRandomInt(0, EYES_COLORS.length - 1);
  return EYES_COLORS[eyeColorIndex];
};

// creating object

var createMageFeatures = function () {
  var mageFeatures = {
    name: nameConcatenation(),
    coatColor: generatedCoatColor(),
    eyesColor: generatedEyeColor(),
  };
  return mageFeatures;
};

//  creating mage array
var mages = [];
for (var i = 0; i < MAGES_AMOUNT; i++) {
  mages.push(createMageFeatures());
}

//  adding mage array to DOM
// for () {

// };
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

for (var j = 0; j < MAGES_AMOUNT; j++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  similarListElement.appendChild(wizardElement);
  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[i];
}

//  adding name to template
var writtenName = document.querySelector('.setup-similar-label');
writtenName.textContent = '';
// console.log(mages);

