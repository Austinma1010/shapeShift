

// User Dashboard Section

// Personal stats section
const bmiFetch = (a, w, h) => {
  const url = `https://fitness-calculator.p.rapidapi.com/bmi?age=${a}&weight=${w}&height=${h}`;
  
    fetch(url, {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            'X-RapidAPI-Key': '3d9b02f0b8msh672db476a5b07ffp14675ajsna77c170ea78c',
		    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
     },
      }).then((response) => {
          if (response.ok) {
            return response.json();
          }
        }).then((data) => {
            
            alert('Your BMI is: ' + data.data.bmi);
        }).catch((error) => {
          console.error("Error:", error);
        });
}

const idealWeightFetch = (g, h) => {
  const url = `https://fitness-calculator.p.rapidapi.com/idealweight?gender=${g}&height=${h}`;
  
    fetch(url, {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            'X-RapidAPI-Key': '3d9b02f0b8msh672db476a5b07ffp14675ajsna77c170ea78c',
		    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
     },
      }).then((response) => {
          if (response.ok) {
            return response.json();
          }
        }).then((data) => {
            
            alert('Your ideal body weight is: ' + data.data.Devine + ' Kgs')
            
        }).catch((error) => {
          console.error("Error:", error);
        });
}

const caloricFetch = (a, h, w, g, al) => {
  const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${a}&gender=${g}&height=${h}&weight=${w}&activitylevel=${al}`;
  
    fetch(url, {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            'X-RapidAPI-Key': '3d9b02f0b8msh672db476a5b07ffp14675ajsna77c170ea78c',
		    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
     },
      }).then((response) => {
          if (response.ok) {
            return response.json();
          }
        }).then((data) => {
            
            alert('Your daily calorie expenditure is: ' + data.data.BMR + 'calories');
            return data.data.BMR
            
        }).catch((error) => {
          console.error("Error:", error);
        });
}

const cnFetch = (a, h, w, g, al) => {
  const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${a}&gender=${g}&height=${h}&weight=${w}&activitylevel=${al}`;
  console.log(url);
    fetch(url, {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            'X-RapidAPI-Key': '3d9b02f0b8msh672db476a5b07ffp14675ajsna77c170ea78c',
		    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
     },
      }).then((response) => {
          if (response.ok) {
            return response.json();
          }
        }).then((data) => {
            const lose = data.data.BMR - 250;
            const gain = data.data.BMR + 250;
            alert('To gain weight you need ' + gain + ' calories per day. To Lose weight you need ' + lose + ' calories per day');
            
            
        }).catch((error) => {
          console.error("Error:", error);
        });
}

const getBmr = (e) => {
  e.preventDefault();
  fetch("./bmr", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        
        return response.json();
      }
    }).then((data) => {
      const age = data.age.toString();
      const height = data.height.toString();
      const weight = data.weight.toString();
      
      bmiFetch(age, height, weight);
    })
    .catch((error) => {
      console.log('catch is running')
      console.error("Error:", error);
    });
};

const getTdee = (e) => {
  e.preventDefault();
  fetch("./tdee", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((data) => {
      let { gender, age, height, weight, activity_level } = data;

          if (gender) {
            gender = "male";
          } else {
            gender = "female";
          }

          if (activity_level == 1) {
            activity_level = 'level_1';
          } else if (activity_level == 2) {
            activity_level = 'level_2';
          } else if (activity_level == 3) {
            activity_level = 'level_3';
          } else if (activity_level == 4) {
            activity_level = 'level_4';
          } else if (activity_level == 5) {
            activity_level = 'level_5';
          }
          if (weight > 160) {
            alert('Sorry, youre too heavy for our calculations to work');
            return;
          } else if (weight < 40) {
            alert('Sorry, Youre too light for our calculations to work');
            return;
          }

          if (height > 230) {
            alert('Sorry, youre too tall for our calculations to work');
            return;
          } else if (height < 130) {
            alert('Sorry, Youre too short for our calculations to work');
            return;
          }

          caloricFetch(age, height, weight, gender, activity_level);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

}

const getCn = (e) => {
  e.preventDefault();
  fetch("./tdee", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((data) => {
      let { gender, age, height, weight, activity_level } = data;

          if (gender) {
            gender = "male";
          } else {
            gender = "female";
          }

          if (activity_level == 1) {
            activity_level = 'level_1';
          } else if (activity_level == 2) {
            activity_level = 'level_2';
          } else if (activity_level == 3) {
            activity_level = 'level_3';
          } else if (activity_level == 4) {
            activity_level = 'level_4';
          } else if (activity_level == 5) {
            activity_level = 'level_5';
          }
          if (weight > 160) {
            alert('Sorry, youre too heavy for our calculations to work');
            return;
          } else if (weight < 40) {
            alert('Sorry, Youre too light for our calculations to work');
            return;
          }

          if (height > 230) {
            alert('Sorry, youre too tall for our calculations to work');
            return;
          } else if (height < 130) {
            alert('Sorry, Youre too short for our calculations to work');
            return;
          }

          cnFetch(age, height, weight, gender, activity_level);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

}

const getIdealWeight = (e) => {
  e.preventDefault();
  fetch("./idealWeight", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((data) => {
      
      let { gender, height } = data;
      if (gender) {
        gender = "male";
      } else {
        gender = "female";
      }
      idealWeightFetch(gender, height);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

}

document.querySelector("#bmr").addEventListener("click", getBmr);
document.querySelector("#tdee").addEventListener("click", getTdee);
document.querySelector("#caloric-needs").addEventListener("click", getCn);
document.querySelector("#ideal-weight").addEventListener("click", getIdealWeight);



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
