const router = require('express').Router();
const calculate = require('fitness-health-calculations');

// const gender = document.querySelector('#gender-signup');
// const weight = document.querySelector('#weight-signup');
// const height = document.querySelector('#height-signup');
// const age = document.querySelector('#age-signup');
// const activity_level = document.querySelector('#activity-level');
// const weightGoal = document.querySelector('#user-goal');

router.get('/', (req, res) => {
   try {
    const myBmr = calculate.bmr(gender, age, height, weight);
    res.status(200).json(myBmr);

} catch (err) {
    res.status(400).json(err);
}
})
// bmr
// let myBmr = calculate.bmr(gender, age, height, weight);
// console.log(myBmr);

// total caloric needs
// let totalCaloricNeeds = calculate.caloricNeeds(gender, age, height, weight, activity_level, weightGoal, approach)

// total daily energy expenditure
// let dailyEnergyExp = calculate.tdee(gender, age, height, weight, activity_level)

// ideal body weight
// let idealBodyWeight = calculate.idealBodyWeight(height, gender)

module.exports = router;