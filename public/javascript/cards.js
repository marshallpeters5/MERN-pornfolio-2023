// When the document is ready
$(document).ready(function () {
  // Add a click event listener to elements with the class "option" using jQuery
  $(".option").click(function () {
    // Remove the "active" class from all elements with the class "option"
    $(".option").removeClass("active");

    // Add the "active" class to the clicked element
    $(this).addClass("active");
  });
});

// Select all elements with the class "option"
const options = document.querySelectorAll('.option');

// Iterate over each option
options.forEach(option => {
  // Add a click event listener to each option
  option.addEventListener('click', function (event) {
    // Check if the clicked option already has the class "active"
    if (option.classList.contains('active')) {
      // Do nothing if it is already active
    } else {
      // Prevent the default behavior of the click event
      event.preventDefault();
    }
  });
});
