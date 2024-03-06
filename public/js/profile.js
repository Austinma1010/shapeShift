// User Dashboard Section

// Personal stats section
const gender = document.querySelector('#gender-signup');
const weight = document.querySelector('#weight-signup');
const height = document.querySelector('#height-signup');
const age = document.querySelector('#age-signup');
const activity_level = document.querySelector('#activity-level');
const weightGoal = document.querySelector('#user-goal');
const bmrBtn = document.querySelector('#bmr');
const tdeeBtn = document.querySelector('#tdee');
const caloricNeedsBtn = document.querySelector('#caloric-needs');
const idealWeightBtn = document.querySelector('#ideal-weight');

// basal metabolic rate
bmrBtn.addEventListener('click', function() {
    // create fetch call
    const data = { gender, weight, height, age, activity_level, weightGoal };

    fetch('https://example.com/api/stats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });


//     fetch('http://localhost:3001/api/stats')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

    // let myBmr = calculate.bmr(gender, age, height, weight);
    // console.log(myBmr);
})





// New Workout Button and Form


// Past-Workouts Section