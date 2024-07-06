

function openDay(event, dayName) {
    // Hide all days
    var i, day;
    day = document.getElementsByClassName("day");
    for (i = 0; i < day.length; i++) {
        day[i].style.display = "none";
    }

    // Remove active class from all buttons
    var tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected day
    document.getElementById(dayName).style.display = "block";

    // Add active class to the clicked button
    event.currentTarget.className += " active";
}

// Show Day 1 by default
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tablink")[0].click();
});
