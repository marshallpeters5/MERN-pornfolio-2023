const checkbox = document.querySelector("#checkbox");
const mainBody = document.querySelector(".mainBody");

checkbox.addEventListener("click", () => mainBody.classList.toggle("darkBg"));
$(document).ready(function() {
    $('#checkbox').change(function() {
       if ($(this).is(':checked')) {
          $('body').addClass('dark-mode');
       } else {
          $('body').removeClass('dark-mode');
       }
    });
 });