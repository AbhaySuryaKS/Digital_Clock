//To give Time(hh:mm:ss) and Date(dd:mm:yyyy)
setInterval(getdateandtime, 1000);
    function getdateandtime() {
        document.getElementById("date-box").innerHTML = new Date().getDate() + " : " + new Date().getMonth() + " : " + new Date().getFullYear();
        document.getElementById("time-box").innerHTML = new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
    }

//For alarm
function setAlarm() {
    // Get the alarm time from the input
    var alarmTime = document.getElementById('alarmTime').value;

    if (!alarmTime) {
        alert('Please set a valid time.');
        return;
    }

    // Convert the alarm time to a Date object for comparison
    var [hours, minutes] = alarmTime.split(':');
    var alarmDate = new Date();
    alarmDate.setHours(hours);
    alarmDate.setMinutes(minutes);

    // Function to check if the current time matches the alarm time
    function checkAlarm() {
        var now = new Date();
        
        if (now.getHours() === alarmDate.getHours() && 
            now.getMinutes() === alarmDate.getMinutes()) {
            
            // Play the alarm sound
            var alarmAudio = document.getElementById('alarmAudio');
            alarmAudio.play().catch(function(error) {
                console.log("Playback failed:", error);
            });

            // Clear the interval after the alarm goes off
            clearInterval(alarmInterval);
        }
    }

    // Check the alarm time every second
    let alarmInterval = setInterval(checkAlarm, 1000);
}

//For stopclock
//create array for hh:mm:ss, display
let [hh, mm, ss] = [0, 0, 0];
let showcount = document.getElementById('stopclock');
let countup = null;

//function to increase time per second
function count() {
    ss++;
    if (ss == 60) {
        ss = 0;
        mm++;
        if (mm == 60) {
            mm = 0;
            hh++;
            if (hh == 24) {
                document.getElementById("stopclock").innerHTML = "24 hours completed!";
            }
        }
    }

    //code for 2 number for seconds, minutes, hours 
    let s = ss >= 10 ? ss : "0" + ss;
    let m = mm >= 10 ? mm : "0" + mm;
    let h = hh >= 10 ? hh : "0" + hh;
    //display time
    showcount.innerHTML = h + ":" + m + ":" + s;
}

//functions for the buttons
//start/stop time
function startstop() {
    const stspbutton = document.getElementById("startstopbutton");
    if (countup === null) {
        countup = setInterval(count,1000);
        stspbutton.textContent = "Stop";
        document.getElementById("startstopbutton").style.background = "red";
    } else {
        clearInterval(countup);
        countup = null;
        stspbutton.textContent = "Start";
        document.getElementById("startstopbutton").style.background = "green";
    }


}

//reset time
function reset() {
    [hh, mm, ss] = [0, 0, 0];
    showcount.innerHTML = "00:00:00";
    if (countup !== null) {
        clearInterval(countup);
        countup = null;
        document.getElementById("startstopbutton").textContent = "Start";
        document.getElementById("startstopbutton").style.background = "green";
    }
}
