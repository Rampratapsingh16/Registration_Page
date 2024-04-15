document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    document.getElementById('error-message').textContent = 'Passwords do not match.';
    return;
  }

  // Here, you can add code to send the registration data to a server for processing
  console.log('Registration successful!');
  console.log('Username: ' + username);
  console.log('Email: ' + email);
  console.log('Password: ' + password);

  // Clear the form fields
  document.getElementById('username').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('confirm-password').value = '';
  document.getElementById('error-message').textContent = '';
});
