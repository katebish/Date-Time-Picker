// Initalise as a date time picker with current time
$.fn.dateTime = function (currDate) {
    year = currDate.getFullYear();
    month = (currDate.getMonth() + 1).toString().padStart(2, "0");
    day = currDate.getDate().toString().padStart(2, "0");
    hours = currDate.getHours().toString().padStart(2, "0");
    minutes = currDate.getMinutes().toString().padStart(2, "0");

    this.val(year + "-" + month + "-" + currDate.getDate() + " " + currDate.getHours() + ":" + minutes);
}

// Clickind date time input hide and show fields
$("#datetime").click(function () {
    if ($(".popup").css("visibility") == 'visible') {
        $(".popup").css("visibility", "hidden");
    }
    else {
        $(".popup").css("visibility", "visible");
    }
});

// Set date/time input to newly selected date and time
$("#savebutton").click(function () {
    date = $("#dateinput").val();
    time = $("#timeinput").val();
    newDate = new Date(date + "T" + time);
    $("#datetime").dateTime(newDate);
});

// On load set date/time to current date
currDate = new Date($.now());
$("#datetime").dateTime(currDate);