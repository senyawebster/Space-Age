export class spaceAge {
  constructor(name, birthdate, gender, mood) {
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
  getAge() {
    let today = new Date();
    let birthDate = new Date(this.birthdate);

    let y = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    let d = today.getDate() - birthDate.getDate();
    let earthAgeInSeconds = ((y * 31557600) + (m * 2629800) + (d * 86400) - 86400);

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
  getMercuryAge() {
    let earthAgeInSeconds = this.getAge();
    let mercuryAgeInSeconds = (earthAgeInSeconds / 0.24);
    return (mercuryAgeInSeconds/ 31557600).toFixed(3);
  }


  // -->Return the age of a human in Venus years. (A Venus year is .62 Earth years.)
  getVenusAge() {
    let earthAgeInSeconds = this.getAge();
    let venusAgeInSeconds = (earthAgeInSeconds / 0.62);
    return (venusAgeInSeconds/ 31557600).toFixed(3);
  }

  // -->Return the age of a human in Mars years. (A Mars year is 1.88 Earth years.)
  getMarsAge() {
    let earthAgeInSeconds = this.getAge();
    let marsAgeInSeconds = (earthAgeInSeconds / 1.88);
    return (marsAgeInSeconds/ 31557600).toFixed(3);
  }

  // -->Return the age of a human in Jupiter years. (A Jupiter year is 11.86 Earth years.)
  getJupiterAge() {
    let earthAgeInSeconds = this.getAge();
    let jupiterAgeInSeconds = (earthAgeInSeconds / 11.86);
    return (jupiterAgeInSeconds/ 31557600).toFixed(3);
  }

  // -->Determine how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. (Note that life expectancy shouldn’’t be a hard-coded value. After all, it can vary from country to country and depending on various demographics.)
  lifeExpectancy(gender, mood) {
    let life = 75;
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

  lifeLeftOnMercury() {
    let age = this.getMercuryAge();
    let expect = this.lifeExpectancy();
    return ((expect - age) / .24).toFixed(0);
  }

  lifeLeftOnVenus() {
    let age = this.getVenusAge();
    let expect = this.lifeExpectancy();
    return ((expect - age) / .62).toFixed(0);
  }

  lifeLeftOnMars() {
    let age = this.getMarsAge();
    let expect = this.lifeExpectancy();
    return ((expect - age) / 1.88).toFixed(0);
  }

  lifeLeftOnJupiter() {
    let age = this.getJupiterAge();
    let expect = this.lifeExpectancy();
    return ((expect - age) / 11.86).toFixed(0);
  }

  // -->If a user has already surpassed the average life expectancy, your application should account for (and test) this possible outcome as well.

}
