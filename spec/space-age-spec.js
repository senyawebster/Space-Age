import { spaceAge } from './../js/space-calc.js';

describe('spaceAge', function(){
  let userGood;
  let userBad;

  beforeEach(function() {
    userGood = new spaceAge();
    userGood.name = 'Jill';
    userGood.age = 20;
    userGood.gender = 'female';
    userGood.mood = 'good';

    userBad = new spaceAge();
    userBad.name = 'Jack';
    userBad.age = 20;
    userBad.gender = 'male';
    userBad.mood = 'bad';
  });

  it('should register a user', function() {
    expect(userGood.name, userGood.age, userGood.gender, userGood.mood).toEqual('Jill', 20, 'female', 'good');
  });









});
