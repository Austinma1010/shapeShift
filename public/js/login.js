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
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const gender = document.querySelector('#gender-signup').value
    const weight = document.querySelector('#weight-signup').value.trim();
    const height = document.querySelector('#height-signup').value.trim();
    const age = document.querySelector('#age-signup').value.trim();
    const activity = document.querySelector('#activity-level').value.trim();
    const goal = document.querySelector('#user-goal').value.trim();
    // Set up true or false values in the gender section of the form
    const genderValues = {
      selectedOption: true // Set the boolean value here
    };

    const source = document.getElementById('gender-signup').innerHTML;
    const template = Handlebars.compile(source);
    const html = template(genderValues);

    document.getElementById('gender-signup').innerHTML = html;
  
    if (name && email && password && gender && weight && height && age && activity && goal) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, gender, weight, height, age, activity, goal }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);