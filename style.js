//store the inputs
myStorage = window.localStorage;
//variables for the current time
var hour = moment().format('h:mm:ss a');
var todaysDate = moment().format('dddd') + "" + moment().format ("Do MMM YYYY");
var userInput;
var inputHour;

$('#todaysDate').text(todaysDate);

//variables for each hour
var hour9 = $("9:00am");
var hour10 = $("10:00am");
var hour11 = $("11:00am");
var hour12 = $("12:00pm");
var hour1 = $("1:00pm");
var hour2 = $("2:00pm");
var hour3 = $("3:00pm");
var hour4 = $("4:00pm");
var hour5 = $("5:00pm");
var hour6 = $("6:00pm");
var hour7 = $("7:00pm");
var hour8 = $("8:00pm");
var hour9 = $("9:00pm");
var hour10 = $("10:00pm");
var hour11 = $("11:00pm");
var hour12am = $("12:00am");

var everyHour = [hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8, hour9, hour10, hour11, hour12am];

function schedule(){
    var event9 = JSON.parse(localStorage.getItem("9:00 AM"));
    hour9.val(event9);
    var event10 = JSON.parse(localStorage.getItem("10:00 AM"));
    hour10.val(event10);
    var event11 = JSON.parse(localStorage.getItem("11:00 AM"));
    hour11.val(event11);
    var event12 = JSON.parse(localStorage.getItem("12:00 PM"));
    hour12.val(event12);
    var event1 = JSON.parse(localStorage.getItem("1:00 PM"));
    hour1.val(event1);
    var event2 = JSON.parse(localStorage.getItem("2:00 PM"));
    hour2.val(event2);
    var event3 = JSON.parse(localStorage.getItem("3:00 PM"));
    hour3.val(event3);
    var event4= JSON.parse(localStorage.getItem("4:00 PM"));
    hour4.val(event4);
    var event5 = JSON.parse(localStorage.getItem("5:00 PM"));
    hour5.val(event5);
    var event6 = JSON.parse(localStorage.getItem("6:00 PM"));
    hour6.val(event6)
    var event7 = JSON.parse(localStorage.getItem("7:00 PM"));
    hour7.val(event7)
    var event8 = JSON.parse(localStorage.getItem("8:00 PM"));
    hour8.val(event8)
    var event9 = JSON.parse(localStorage.getItem("9:00 PM"));
    hour9.val(event9)
    var event10 = JSON.parse(localStorage.getItem("10:00 PM"));
    hour10.val(event10)
    var event11 = JSON.parse(localStorage.getItem("11:00 PM"));
    hour11.val(event11)
    var event12 = JSON.parse(localStorage.getItem("12:00 AM"));
    hour12am.val(event12)
}

function colorchange(){
    $(".form-control").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);
        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}
$(document).ready(function(){
    schedule()
    colorchange()

    // Save button
    $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    inputHour = $(this).siblings(".input-block-prepend").text().trim();
    console.log(inputHour);
    localStorage.setItem(inputHour, userInput);
    })
});
