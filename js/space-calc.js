export class spaceAge {
  constructor(name, age, gender, mood) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.mood = mood;
  }
  // -->Take a person’s age in years and convert it into seconds.
  secondsConverter(age) {
    const secondsInYear = 31536000;
    let ageInSeconds = age * secondsInYear;
    return ageInSeconds;
  }

  // -->Take two dates and determine the difference, in seconds, between the two. (This way a user can enter a birthdate and the application can compare the birthdate against the current time to come up with an accurate age.)
  getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    let secondsAge = age * 3.154e+7;
    return secondsAge;
  }



  // -->Return the age of a human in Mercury years. (A Mercury year is .24 Earth years.)

  // -->Return the age of a human in Venus years. (A Venus year is .62 Earth years.)

  // -->Return the age of a human in Mars years. (A Mars year is 1.88 Earth years.)

  // -->Return the age of a human in Jupiter years. (A Jupiter year is 11.86 Earth years.)

  // -->Determine how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. (Note that life expectancy shouldn’’t be a hard-coded value. After all, it can vary from country to country and depending on various demographics.)

  // -->If a user has already surpassed the average life expectancy, your application should account for (and test) this possible outcome as well.

}
