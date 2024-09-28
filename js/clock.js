// Digital clock 
function myTimeAndDate(){
    let myTime = new Date()
    var hr,min = (myTime.getMinutes() < 10) ? "0" + myTime.getMinutes() : myTime.getMinutes()
    var sec = (myTime.getSeconds() < 10) ? "0" + myTime.getSeconds() : myTime.getSeconds()
    var AmPm = (myTime.getHours() >= 12) ? "PM" : "AM";


    if(myTime.getHours() == 0){
        hr = 12
    }else if(myTime.getHours() >= 12){
        hr = myTime.getHours() - 12
    }else{
        hr = myTime.getHours()
    }

    
    // var currentValue1 = hr + ":"
    // var currentValue2 = min + ":"
    // var currentValue3 = sec + ":"
    
    document.getElementById("houre").innerHTML  = hr
    document.getElementById("minet").innerHTML = min 
    document.getElementById("second").innerHTML =  sec 
    document.getElementById("AmPm").innerHTML = AmPm
    
}

 setInterval(() => {
    myTimeAndDate()
}, 1000); 


new kursor({
    type: 1
})