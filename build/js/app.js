(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var spaceAge = exports.spaceAge = function () {
  function spaceAge(name, birthdate, gender, mood) {
    _classCallCheck(this, spaceAge);

    this.name = name;
    this.birthdate = birthdate;
    this.gender = gender;
    this.mood = mood;
  }
  // -->Take a person’s age in years and convert it into seconds.
  // secondsConverter(age) {
  //   const secondsInYear = 31536000;
  //   let ageInSeconds = age * secondsInYear;
  //   return ageInSeconds;
  // }

  // -->Take two dates and determine the difference, in seconds, between the two. (This way a user can enter a birthdate and the application can compare the birthdate against the current time to come up with an accurate age.)


  _createClass(spaceAge, [{
    key: 'getAge',
    value: function getAge() {
      var today = new Date();
      var birthDate = new Date(this.birthdate);

      var y = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      var d = today.getDate() - birthDate.getDate();
      var earthAgeInSeconds = y * 31557600 + m * 2629800 + d * 86400 - 86400;

      // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      //     earthAgeInSeconds;
      // }
      if (earthAgeInSeconds <= 0) {
        return "You haven't been born yet silly";
      } else {
        return earthAgeInSeconds;
      }
    }

    // -->Return the age of a human in Mercury years. (A Mercury year is .24 Earth years.)

  }, {
    key: 'getMercuryAge',
    value: function getMercuryAge() {
      var earthAgeInSeconds = this.getAge();
      var mercuryAgeInSeconds = earthAgeInSeconds / 0.24;
      return (mercuryAgeInSeconds / 31557600).toFixed(3);
    }

    // -->Return the age of a human in Venus years. (A Venus year is .62 Earth years.)

  }, {
    key: 'getVenusAge',
    value: function getVenusAge() {
      var earthAgeInSeconds = this.getAge();
      var venusAgeInSeconds = earthAgeInSeconds / 0.62;
      return (venusAgeInSeconds / 31557600).toFixed(3);
    }

    // -->Return the age of a human in Mars years. (A Mars year is 1.88 Earth years.)

  }, {
    key: 'getMarsAge',
    value: function getMarsAge() {
      var earthAgeInSeconds = this.getAge();
      var marsAgeInSeconds = earthAgeInSeconds / 1.88;
      return (marsAgeInSeconds / 31557600).toFixed(3);
    }

    // -->Return the age of a human in Jupiter years. (A Jupiter year is 11.86 Earth years.)

  }, {
    key: 'getJupiterAge',
    value: function getJupiterAge() {
      var earthAgeInSeconds = this.getAge();
      var jupiterAgeInSeconds = earthAgeInSeconds / 11.86;
      return (jupiterAgeInSeconds / 31557600).toFixed(3);
    }

    // -->Determine how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. (Note that life expectancy shouldn’’t be a hard-coded value. After all, it can vary from country to country and depending on various demographics.)

  }, {
    key: 'lifeExpectancy',
    value: function lifeExpectancy(gender, mood) {
      var life = 75;
      if (this.gender === 'male') {
        life -= 5;
      } else {
        life += 5;
      }
      if (this.mood === 'bad') {
        life -= 5;
      } else {
        life += 5;
      }
      return life;
    }
  }, {
    key: 'lifeLeftOnMercury',
    value: function lifeLeftOnMercury() {
      var age = this.getMercuryAge();
      var expect = this.lifeExpectancy();
      return ((expect - age) / .24).toFixed(0);
    }
  }, {
    key: 'lifeLeftOnVenus',
    value: function lifeLeftOnVenus() {
      var age = this.getVenusAge();
      var expect = this.lifeExpectancy();
      return ((expect - age) / .62).toFixed(0);
    }
  }, {
    key: 'lifeLeftOnMars',
    value: function lifeLeftOnMars() {
      var age = this.getMarsAge();
      var expect = this.lifeExpectancy();
      return ((expect - age) / 1.88).toFixed(0);
    }
  }, {
    key: 'lifeLeftOnJupiter',
    value: function lifeLeftOnJupiter() {
      var age = this.getJupiterAge();
      var expect = this.lifeExpectancy();
      return ((expect - age) / 11.86).toFixed(0);
    }

    // -->If a user has already surpassed the average life expectancy, your application should account for (and test) this possible outcome as well.

  }]);

  return spaceAge;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _spaceCalc = require('./../js/space-calc.js');

$(document).ready(function () {
  $('#user').submit(function (event) {
    event.preventDefault();
    console.log("hi");
    var name = $('name').val();
    var gender = $('gender').val();
    var mood = $('mood').val();
    var birthdate = $('birthdate').val();

    var user = new _spaceCalc.spaceAge(name, birthdate, gender, mood);

    $("span#earthAgeInSeconds").text(user.getAge());
    $("span#mercuryAgeInSeconds").text(user.getMercuryAge());
  });
});

},{"./../js/space-calc.js":1}]},{},[2]);
