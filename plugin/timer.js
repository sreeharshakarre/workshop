
$(document).ready(function() {
  // Set the date we're counting down to
  var countDownDate = new Date("June 1, 2024 18:00:00").getTime();

  // Update the countdown every 1 second
  var x = setInterval(function() {

      // Get the current date and time
      var now = new Date().getTime();

      // Calculate the remaining time
      var distance = countDownDate - now;

      // Calculate days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown in separate IDs
      $("#days").html(days );
      $("#hours").html(hours );
      $("#minutes").html(minutes );
      $("#seconds").html(seconds );

      
      // Display the countdown in separate IDs
      $("#days1").html(days );
      $("#hours1").html(hours );
      $("#minutes1").html(minutes );
      $("#seconds1").html(seconds );

      // If the countdown is over, display a message
      if (distance < 0) {
          clearInterval(x);
          $("#countdown").html("EXPIRED");
      }
  }, 1000); // Update every 1 second
});