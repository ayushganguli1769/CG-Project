function addZero(time_input) {
    if (time_input < 10) {
        time_input = "0" + time_input;
    }
    return time_input;
}
function showTime() {
    var curr_time = new Date();
    var hr = curr_time.getHours();
    var min = curr_time.getMinutes();
    var sec = curr_time.getSeconds();
    var suffix_time;
    if (hr < 12)
    {
        suffix_time = "<span style='color:yellow;'>AM</span>";
    }
    else
    {
        suffix_time = "<span style='color:yellow;'>PM</span>";
    }
    if (hr == 0)
    {
        hr = 12;
    }
    if (hr > 12)
    {
        hr -= 12;
    }
    // adding 0 to all time field less than 10
    hr = addZero(hr);
    min = addZero(min);
    sec = addZero(sec);
    document.getElementById("time").innerHTML = hr + ":" + min + ":" + sec + " " + suffix_time;
    var day_name_arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var month_arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var curWeekDay = day_name_arr[curr_time.getDay()];
    var curDay = curr_time.getDate();
    var curMonth = month_arr[curr_time.getMonth()];
    var curYear = curr_time.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    setTimeout(function(){ showTime() }, 500);
}
