import { spaceAge } from './../js/space-calc.js';

describe('spaceAge', function(){
  let userGood;
  let userBad;
  let unbornUser;

  beforeEach(function() {
    userGood = new spaceAge();
    userGood.name = 'Jill';
    userGood.birthdate = '2016-10-17';
    userGood.gender = 'female';
    userGood.mood = 'good';

    unbornUser = new spaceAge();
    unbornUser.name = 'unborn';
    unbornUser.birthdate = '2018-10-16';
    unbornUser.gender = 'whatever';
    unbornUser.mood = 'whatever';

    userBad = new spaceAge();
    userBad.name = 'Jack';
    userBad.birthdate = '2016-10-16';
    userBad.gender = 'male';
    userBad.mood = 'bad';
  });

  it('should register a user', function() {
    expect(userGood.name, userGood.birthdate, userGood.gender, userGood.mood).toEqual('Jill', '2016-10-16', 'female', 'good');
    // expect(userGood).toEqual(spaceAge {name: "Jill", birthdate: "2016-10-16", gender: "female", mood: "good"});
  });

  // it('should calculate a user\'s age in seconds', function(){
  //   expect(userGood.secondsConverter(20)).toEqual(630720000)
  //   // getting age is not defined or 'userGood.age.secondsConverter is not a function' -- tried everything
  // });

  it('should calculate age in seconds based on bday', function() {
    // let birthdate = userGood.birthdate;
    expect(userGood.getAge()).toEqual(31557600);
  });
      // Make sure you enter TODAY'S DATE in userGood's birthdate in the beforeEach


  it('should prevent a user from entering a future birthdate', function() {
    // let birthdate = unbornUser.birthdate;
    expect(unbornUser.getAge()).toEqual("You haven't been born yet silly");
  });

  it('should calculate Mercury age in years based on birthdate', function() {
    // let birthdate = userGood.birthdate;
    expect(userGood.getMercuryAge()).toEqual('4.167');
  });

  it('should calculate Venus age in years based on birthdate', function() {
    // let birthdate = userGood.birthdate;
    expect(userGood.getVenusAge()).toEqual('1.613');
  });

  it('should calculate Mars age in years based on birthdate', function() {
    // let birthdate = userGood.birthdate;
    expect(userGood.getMarsAge()).toEqual('0.532');
  });

  it('should calculate Jupiter age in years based on birthdate', function() {
    // let birthdate = userGood.birthdate;
    expect(userGood.getJupiterAge()).toEqual('0.084');
  });



});
