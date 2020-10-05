$(document).ready(function () {
  //listen and get the button click to start function and grab the var items  
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".task").val();
        var time = $(this).parent().attr("id");
        

        // saves to local storage
        localStorage.setItem(time, value);
    });

    //fucntion to get time and put the items into new classes depending on times of when they were assigned
    function hours1() {
        var currentHour = moment().hours();
        
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            if (blockHour < currentHour) {
                $(this).addClass("past");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    hours1();

    //sets the var to update every 15 seconds
        var interval = setInterval(hours1, 15000);
        // load any saved data from localStorage
        $("#hour-1 .task").val(localStorage.getItem("hour-1"));
        $("#hour-2 .task").val(localStorage.getItem("hour-2"));
        $("#hour-3 .task").val(localStorage.getItem("hour-3"));
        $("#hour-4 .task").val(localStorage.getItem("hour-4"));
        $("#hour-5 .task").val(localStorage.getItem("hour-5"));
        $("#hour-6 .task").val(localStorage.getItem("hour-6"));
        $("#hour-7 .task").val(localStorage.getItem("hour-7"));
        $("#hour-8 .task").val(localStorage.getItem("hour-8"));
        $("#hour-9 .task").val(localStorage.getItem("hour-9"));
    
        // display current day on page with media query
        $("#currentDay").text(moment().format("dddd, MMMM Do"));
    });
            
        



