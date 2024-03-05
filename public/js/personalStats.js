const calculate = require('fitness-health-calculations');

const gender = document.querySelector('#gender-signup');
const weight = document.querySelector('#weight-signup');
const height = document.querySelector('#height-signup');
const age = document.querySelector('#age-signup');
const activity_level = document.querySelector('#activity-level');
const weightGoal = document.querySelector('#user-goal');

// basal metabolic rate
let myBmr = calculate.bmr(gender, age, height, weight);
console.log(myBmr);

// total caloric needs
let totalCaloricNeeds = calculate.caloricNeeds(gender, age, height, weight, activity_level, weightGoal, approach)

// total daily energy expenditure
let dailyEnergyExp = calculate.tdee(gender, age, height, weight, activity_level)
console.log(dailyEnergyExp);

// ideal body weight
let idealBodyWeight = calculate.idealBodyWeight(height, gender)
console.log(idealBodyWeight);

