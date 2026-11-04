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

// Calculate years of experince
const currentYear = new Date().getFullYear()
const startYear = 2008;
const experienceYears = currentYear - startYear;

// Set the years of experience
const experienceYearsElement = document.getElementById("experienceYears");
if (experienceYearsElement) {
    experienceYearsElement.textContent = `${experienceYears}+`;
}

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

    // Plain-language message if the browser blocks submit on an incomplete number
    this.setCustomValidity(numbers.length === 10 ? '' : 'Please enter a 10-digit phone number.');
    
    // Validation styling
    this.classList.toggle('is-invalid', numbers.length < 10);
    this.classList.toggle('is-valid', numbers.length === 10);
});


// Preselect the service in the quote form when a "Get My Free Quote" button is clicked
document.querySelectorAll('.quote-link').forEach(function (link) {
    link.addEventListener('click', function () {
        document.getElementById('service').value = link.dataset.service;
    });
});

// Support ad links like /?service=holiday-lighting
const serviceParam = new URLSearchParams(window.location.search).get('service');
if (serviceParam) {
    const serviceSelect = document.getElementById('service');
    if ([...serviceSelect.options].some(function (o) { return o.value === serviceParam; })) {
        serviceSelect.value = serviceParam;
    }
}
