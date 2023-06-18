// Select the checkbox element
const checkbox = document.querySelector("#checkbox");

// Select the mainBody element
const mainBody = document.querySelector(".mainBody");

// Add a click event listener to the checkbox
checkbox.addEventListener("click", () => {
    // Toggle the 'darkBg' class on the mainBody element
    mainBody.classList.toggle("darkBg");
});

// When the document is ready
$(document).ready(function () {
    // Add a change event listener to the checkbox using jQuery
    $('#checkbox').change(function () {
        // If the checkbox is checked
        if ($(this).is(':checked')) {
            // Add the 'dark-mode' class to the body and footer elements
            $('footer').addClass('dark-mode');
            $('body').addClass('dark-mode');
        } else {
            // Remove the 'dark-mode' class from the body and footer elements
            $('body').removeClass('dark-mode');
            $('footer').removeClass('dark-mode');
        }
    });
});
