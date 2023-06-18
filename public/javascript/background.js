// Select the checkbox element
const checkbox = document.querySelector("#checkbox");

// Select the mainBody element
const mainBody = document.querySelector(".mainBody");

// Add a click event listener to the checkbox
checkbox.addEventListener("click", () => {
    // Toggle the 'darkBg' class on the mainBody element
    mainBody.classList.toggle("darkBg");
});

$(document).ready(function () {
    $('#checkbox').change(function () {
        if ($(this).is(':checked')) {
            $('footer').addClass('dark-mode');
            $('body').addClass('dark-mode');

            // Change SVG file names to their white versions
            $('.footer-item img').each(function () {
                var src = $(this).attr('src');
                var newSrc = src.replace('.svg', '-white.svg');
                $(this).attr('src', newSrc);
            });
        } else {
            $('body').removeClass('dark-mode');
            $('footer').removeClass('dark-mode');

            // Change SVG file names back to their original versions
            $('.footer-item img').each(function () {
                var src = $(this).attr('src');
                var newSrc = src.replace('-white.svg', '.svg');
                $(this).attr('src', newSrc);
            });
        }
    });
});
