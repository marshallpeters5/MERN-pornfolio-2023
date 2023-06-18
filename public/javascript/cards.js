$(document).ready(function() {
    $(".option").click(function() {
      $(".option").removeClass("active");
      $(this).addClass("active");
    });
  });

  const options = document.querySelectorAll('.option');

  options.forEach(option => {
    option.addEventListener('click', function(event) {
      if (option.classList.contains('active')) {
        // Allow click event to proceed
      } else {
        event.preventDefault(); // Prevent the default link behavior
      }
    });
  });