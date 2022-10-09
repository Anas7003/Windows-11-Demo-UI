// Start Menu JavaScript
let taskbar = document.getElementById("start")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

start.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "70px"){       //  70px
        startmenu.style.bottom = "-930px"      //   -930px
    }
    else{
        startmenu.style.bottom = "70px"
    }
});


// Multi Pnael JS
let multiPanel = document.getElementById('multiPanel');
// grab the wifi/battery/volume button
let icons = document.getElementById('icons');
icons.addEventListener('click', ()=>{
    // console.log('This is working fine');
    if(multiPanel.style.bottom == '-492px'){
        multiPanel.style.bottom = '60px'
    }
    
    else{
        multiPanel.style.bottom = '-492px'
    }
});


// toggle button JS
let iBtn = document.querySelectorAll('.iBtn');
iBtn.forEach(function(button){
    button.addEventListener('click', function(){
        console.log('clicked');
        if(button.style.color == 'black' && button.style.background == 'white'){
            button.style.background = '#0a84ff';
            button.style.color = 'white';
            // console.log('inside if');
        }
                    
        else{
            button.style.color = 'black';
            button.style.background = 'white';
            // console.log('inside else');
        }
    })
});


// Task Bar Date and Time
// TIME
function updateClock(){
    // Grab all the minutes hour seconds
    let currentTime = new Date;
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();

    // this is to add zero before minutes and seconds if it is less than 10
    currentMinutes = (currentMinutes < 10 ? "0": "") +currentMinutes;

    // This is to show AM PM 
    let timeOfDay = (currentTime < 12) ? "AM": "PM";

    // This is to convert 24 hour clock into 12 hours
    currentHour = (currentHour > 12) ? currentHour - 12: currentHour;  
    currentHour = (currentHour==0) ? 12: currentHour; 

    // String to put into DOM
    let currentTimeStr = currentHour + ":" + currentMinutes + " " + timeOfDay;

    // Push it into DOM
    document.getElementById('clock').innerHTML = currentTimeStr;
}


// DATE
// Grab Day month and year
crntTime = new Date;
currentDate = crntTime.getDate();
currentMonth = crntTime.getMonth();
currentYear = crntTime.getFullYear();

// Creating Date string
let dateStr = currentDate + "-" + (currentMonth+1) + "-" + currentYear;
// console.log(dateStr);

// Str to push into DOM
let date = document.getElementById('date');
date.innerHTML = dateStr;
