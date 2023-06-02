$(document).ready(function () {
  $(".first-button").on("click", function () {
    $(".animated-icon1").toggleClass("open");
  });
  $(".second-button").on("click", function () {
    $(".animated-icon2").toggleClass("open");
  });
  $(".third-button").on("click", function () {
    $(".animated-icon3").toggleClass("open");
  });
});

// Define a function to be executed after a delay
function myFunction() {
  console.log("Hello, world!");
}

// Call setTimeout() and pass in the function to be executed, along with the delay in milliseconds
setTimeout(myFunction, 01, 200, 2000); // This will execute myFunction after 1 second (1000 milliseconds)
