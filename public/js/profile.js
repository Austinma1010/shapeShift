

// User Dashboard Section

// Personal stats section

const getBmr = (e) => {
  e.preventDefault();
  fetch("/api/stats/bmr/:id", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

document.querySelector("#bmr").addEventListener("click", getBmr);
const tdeeBtn = document.querySelector("#tdee");
const caloricNeedsBtn = document.querySelector("#caloric-needs");
const idealWeightBtn = document.querySelector("#ideal-weight");



// New Workout Button and Form
const newWorkoutFormHandler = async (event) => {
    event.preventDefault();

    const name_of_workout = document.querySelector('#workout-name').value.trim();
    const reps = document.querySelector('#workout-reps').value.trim();
    const sets = document.querySelector('#workout-sets').value.trim();
    const muscle_group = document.querySelector('#workout-muscle-group').value.trim();
    const equipment = document.querySelector('#workout-equipment').value.trim();
    const difficulty = document.querySelector('#workout-difficulty').value.trim();
    const instructions = document.querySelector('#workout-instructions').value.trim();

    if (name_of_workout && reps && sets && muscle_group && equipment && difficulty && instructions) {
        const response = await fetch('/api/workout', {
            method: 'POST',
            body: JSON.stringify({ name_of_workout, reps, sets, muscle_group, equipment, difficulty, instructions }),
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

// Past-Workouts Section
const workoutForm = document.getElementById('newWorkoutForm');
workoutForm.style.display = 'none'

const showNewWorkoutForm = (event) => {
    event.preventDefault();
    
    if (workoutForm.style.display = 'none') {
        workoutForm.style.display = 'block';
    } 
};

const hideNewWorkoutForm = (event) => {
    event.preventDefault();
    
    if (workoutForm.style.display = 'block') {
        workoutForm.style.display = 'none';
    } 
};




document.getElementById('hideWorkoutForm').addEventListener('click', hideNewWorkoutForm);
document.getElementById('newWorkoutBtn').addEventListener('click', showNewWorkoutForm);







// Call Functions
document.querySelector('#newWorkoutForm').addEventListener('submit', newWorkoutFormHandler);
