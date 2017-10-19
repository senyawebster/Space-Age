import { spaceAge } from './../js/space-calc.js'

$(document).ready(function() {
  let user = $('#user');
  $('#user').submit(function(event) {
    event.preventDefault();
    console.log("hi");
    let name = $('#name').val();
    let gender = $('#gender').val();
    let mood = $('#mood').val();
    let birthdate = $('#birthdate').val();

    user = new spaceAge(name, birthdate, gender, mood);


    $("span#userName").text(`${user.name}'s '`);
    $("span#earthAgeInSeconds").text(user.getAge());


    $("span#mercuryAgeInYears").text(user.getMercuryAge());
    $("span#venusAgeInYears").text(user.getVenusAge());
    $("span#marsAgeInYears").text(user.getMarsAge());
    $("span#jupiterAgeInYears").text(user.getJupiterAge());

    $("span#mercuryYearsLeftInEarthYears").text(user.lifeLeftOnMercury());
    $("span#venusYearsLeftInEarthYears").text(user.lifeLeftOnVenus());
    $("span#marsYearsLeftInEarthYears").text(user.lifeLeftOnMars());
    $("span#jupiterYearsLeftInEarthYears").text(user.lifeLeftOnJupiter());
  });
});
