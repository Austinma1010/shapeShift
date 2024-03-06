// User Dashboard Section

// Personal stats section
const calculate = require('fitness-health-calculations');
const gender = document.querySelector('#gender-signup');
const weight = document.querySelector('#weight-signup');
const height = document.querySelector('#height-signup');
const age = document.querySelector('#age-signup');
const activity_level = document.querySelector('#activity-level');
const weightGoal = document.querySelector('#user-goal');

// basal metabolic rate
let myBmr = calculate.bmr(gender, age, height, weight);


// total caloric needs
let totalCaloricNeeds = calculate.caloricNeeds(gender, age, height, weight, activity_level, weightGoal, approach)

// total daily energy expenditure
let dailyEnergyExp = calculate.tdee(gender, age, height, weight, activity_level)


// ideal body weight
let idealBodyWeight = calculate.idealBodyWeight(height, gender)




// New Workout Button and Form
const newWorkoutFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#workout-name').value.trim();
    const reps = document.querySelector('#workout-reps').value.trim();
    const sets = document.querySelector('#workout-sets').value.trim();
    const muscleGroup = document.querySelector('#workout-muscle-group').value.trim();
    const equipment = document.querySelector('#workout-equipment').value.trim();
    const difficulty = document.querySelector('#workout-difficulty').value.trim();
    const instructions = document.querySelector('#workout-instructions').value.trim();

    if (name && reps && sets && muscleGroup && equipment && difficulty && instructions) {
        const response = await fetch('/api/workout', {
            method: 'POST',
            body: JSON.stringify({ name, reps, sets, muscleGroup, equipment, difficulty, instructions }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            alert("Form submitted!");
        } else {
            alert("Please fill out all spaces!");
        }
    }
};


// Past-Workouts Section





// Call Functions
document
    .querySelector('.new-workout-form')
    .addEventListener('submit', newWorkoutFormHandler);