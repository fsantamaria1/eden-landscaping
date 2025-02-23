// Set the copyright notice to the current year
document.getElementById("currentYear").textContent = new Date().getFullYear();


var formElement = document.getElementById("contactForm");
  var buttonElement = document.getElementById("sendButton");
  formElement.addEventListener("botpoison-challenge-start", function () {
    buttonElement.setAttribute("disabled", "disabled");
  });
  formElement.addEventListener("botpoison-challenge-success", function () {
    buttonElement.removeAttribute("disabled");
  });
  formElement.addEventListener("botpoison-challenge-error", function () {
    buttonElement.removeAttribute("disabled");
  });

// Formatting of phone number
document.getElementById('phone').addEventListener('input', function (e) {
    // Strip non-digit characters
    let numbers = this.value.replace(/\D/g, '');
    
    // Trim to 10 digits max
    numbers = numbers.substring(0, 10);
    
    // Format display
    let formatted = '';
    if (numbers.length > 0) formatted = '(' + numbers.substring(0,3);
    if (numbers.length > 3) formatted += ') ' + numbers.substring(3,6);
    if (numbers.length > 6) formatted += '-' + numbers.substring(6,10);
    
    this.value = formatted;
    
    // Validation styling
    this.classList.toggle('is-invalid', numbers.length < 10);
    this.classList.toggle('is-valid', numbers.length === 10);
});
