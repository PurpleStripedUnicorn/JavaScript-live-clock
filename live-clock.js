/*

    <<< live-clock.js >>>

    THIS IS THE MAIN JAVASCRIPT AND SHOULD ALWAYS BE
    INCLUDED FOR THE CLOCKS TO FUNCTION PROPERLY

    SEE THE LICENSE FILE FOR MORE INFORMATION ON
    THE LICENSE OF THIS FILE AND OTHER FILES IN THIS
    REPOSITORY.

*/

// function for updating all of the live clock elements
function live_clock_update () {
    // get the current time
    var current_time = new Date();
    // process the date object to get the time to be displayed
    // format: h:mm:ss
    // get the hours to display (no leading zeros)
    // turn the integer into a string
    var hours = String(current_time.getHours());
    // get the minutes to display,
    // make sure to put a 0 before the number if it lower than 10
    // turn the integer into a string
    var minutes = current_time.getMinutes() < 10 ?
                  "0" + String(current_time.getMinutes()) :
                  String(current_time.getMinutes());
    // get the seconds to display,
    // make sure to put a 0 before the number if it lower than 10
    // turn the integer into a string
    var seconds = current_time.getSeconds() < 10 ?
                  "0" + String(current_time.getSeconds()) :
                  String(current_time.getSeconds());
    // put numbers together to get the formatted time
    var time_display = hours + ":" + minutes + ":" + seconds;
    // get all of the elements to update the HTML of
    var elements = document.querySelectorAll("[data-live-clock]");
    // cycle through all elements to update them
    for (i = 0; i < elements.length; i++) {
        // set the inner HTML of the object to be the current time
        // this is the formatted time from earlier
        elements[i].innerHTML = time_display;
    }
}

// wait for the document to be fully loaded
window.onload = function () {
    // initiate the first update to be immediately when the page is loaded
    live_clock_update();
    // set a timer to update every second afterwards
    setInterval(live_clock_update, 1000);
}
