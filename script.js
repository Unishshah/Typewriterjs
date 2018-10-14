const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimersec = document.querySelector(".timersec");
const theTimermin = document.querySelector(".timermin");
const theTimerhr = document.querySelector(".timerhr");


// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:
var sec = 0;
var min = 0;
var hr = 0;
function time()
{   
    sec = sec + 1;
    if(sec < 10)
        {   theTimersec.innerHTML = ":0" + sec;
            console.log("secs 0"+sec);
        }
    else{
    console.log("secs"+sec);
        theTimersec.innerHTML = ":" + sec;
    }
    if(sec == 60)
        {   sec = 0;
            min = min + 1;
         if(min < 10)
        {   theTimermin.innerHTML = ":0" + min;
            console.log("mins 0"+min);
        }
    else{
    console.log("mins"+min);
        theTimermin.innerHTML = ":" + min;
    }
         
            if(min == 60)
                {   
                    min = 0;
                    hr = hr + 1;
                    if(hr < 10)
        {   theTimerhr.innerHTML = "0" + hr;
            console.log("hrs 0"+hr);
        }
    else{
    console.log("hrs"+hr);
        theTimerhr.innerHTML = hr;
    }
                }
        }
    
}


// Match the text entered with the provided text on the page:
function check()
{
    let matchtext = testArea.value;
    
    if(originText == matchtext)
        {
            clearInterval(interval);
    console.log("text matches");        
        }
}

// Start the timer:
let interval = 0;
function start(){
    
    let textenteredlength = testArea.value.length;
    console.log(+textenteredlength);
    if(textenteredlength === 0){
     interval = setInterval(time, 1000);
    }
    
}


// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", check, false);