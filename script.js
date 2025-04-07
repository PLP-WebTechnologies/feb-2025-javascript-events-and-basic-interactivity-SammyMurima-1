// Form validation and submit event listener
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Simple form validation
    if (name === "" || email === "") {
      document.getElementById('formStatus').textContent = "Please fill out all fields.";
    } else {
      document.getElementById('formStatus').textContent = "Form submitted successfully!";
    }
  });
  
  // Toggle visibility of content when the button is clicked
  document.getElementById('toggleButton').addEventListener('click', function() {
    const content = document.getElementById('content');
    if (content.style.display === "none") {
      content.style.display = "block"; // Show content
    } else {
      content.style.display = "none"; // Hide content
    }
  });
  