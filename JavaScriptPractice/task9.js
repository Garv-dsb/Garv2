// conditional operator (?)

// the short hand for the if else

// syntax let result = condition ? value1 : value2

function checkAge(age) {
  return age > 18
    ? console.log("congrats you are above 18")
    : console.log("Please I need to contact your parents");
}

checkAge(19);

// Multiple conditional operatr check
function deepAgeCheck(age) {
  return age < 10 
    ? console.log("congrats you are above less than 10")
    : age < 20
      ? console.log("congrats you are above less than 20")
      : age < 100
        ? console.log("congrats you are above less than 100")
        : console.log("you are died");
}


deepAgeCheck(0);