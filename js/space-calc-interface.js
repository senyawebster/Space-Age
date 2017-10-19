import { spaceAge } from './../js/space-calc.js'

$(document).ready(function() {
  $('#user').submit(function(event) {
    event.preventDefault();
    console.log("hi");
    let name = $('name').val();
    let gender = $('gender').val();
    let mood = $('mood').val();
    let birthdate = $('birthdate').val();

    let user = new spaceAge(name, birthdate, gender, mood);


    $("span#earthAgeInSeconds").text(user.getAge());
    $("span#mercuryAgeInSeconds").text(user.getMercuryAge());
  });
});
