import { spaceAge } from './../js/space-calc.js';

describe('spaceAge', function(){
  let userGood;
  let userBad;
  let unbornUser;

  beforeEach(function() {
    userGood = new spaceAge();
    userGood.name = 'Jill';
    userGood.birthdate = '2016-10-16';
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
    // expect(userGood.name, userGood.birthdate, userGood.gender, userGood.mood).toEqual('Jill', '2016-10-16', 'female', 'good');
    expect(userGood).toEqual(spaceAge {name: "Jill", birthdate: "2016-10-16", gender: "female", mood: "good"});
  });

  // it('should calculate a user\'s age in seconds', function(){
  //   expect(userGood.secondsConverter(20)).toEqual(630720000)
  //   // getting age is not defined or 'userGood.age.secondsConverter is not a function' -- tried everything
  // });

  it('should calculate age in seconds based on bday', function() {
    let birthdate = userGood.birthdate
    expect(userGood.getAge(birthdate)).toEqual(31557600);
  });
  // This test WAS working but then stopped after I started working on the 3rd

  it('should prevent a user from entering a future birthdate', function() {
    let birthdate = unbornUser.birthdate
    debugger;
    expect(unbornUser.getAge(birthdate)).toEqual("You haven't been born yet silly");
  });
  // This error keeps popping up "uncaught Error: bundle error (see logs)" ——> I can't tell why but it came up in prior tests and then disappeared for seemingly no reason?





});
