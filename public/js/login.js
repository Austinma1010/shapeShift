const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const getActivitylevel = (activity_level) => {
    if (activity_level == 'sedentary') {
      return 1;
    } else if (activity_level == 'light') {
      return 2;
    } else if (activity_level == 'moderate') {
      return 3;
    } else if (activity_level == 'high') {
      return 4;
    } else if (activity_level == 'extreme') {
      return 5;
    }

  }
  

  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const full_name = document.getElementById('name-signup').value.trim();
    const email = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();
    let male = document.getElementById('male').value;
    let female = document.getElementById('female').value;
    const weight = document.getElementById('weight-signup').value.trim();
    const height = document.getElementById('height-signup').value.trim();
    const age = document.getElementById('age-signup').value.trim();
    const activity = document.getElementById('activity-level').value.trim();
    const goal = document.getElementById('user-goal').value.trim();

    let gender;


    if (male = 'true') {
      gender = male;
    } else {
      gender = female;
    }
    const activity_level = getActivitylevel(activity);
  
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ full_name, email, password, gender, weight, height, age, activity_level, goal }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    
  };

  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .getElementById('sign-up')
    .addEventListener('click', signupFormHandler);