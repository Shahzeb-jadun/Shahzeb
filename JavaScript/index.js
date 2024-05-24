var firstName = "Shahzeb";
var lastName = "Jadoon";
var yearOfBirth = 2000;
var currentYear = new Date().getFullYear();
var age = currentYear - yearOfBirth;
document.getElementById("para").innerHTML = `Hi, my name is ${firstName} ${lastName}. I'm ${age} years old and I'm learning JavaScript`

var num1=101;
var num2=7;

var avg=num1+num2/2;

document.getElementById("para2").innerHTML= `the average of ${num1} & ${num2} is ${avg}`

var div= num1/num2;
var dec= Math.round (div*100)/100;

document.getElementById("para3").innerHTML= `the answer upto 2 decimal places is ${dec}`


var phone1 = "988866552";
    var phone2 = "99087612366";
    var phone3 = 876543123;

    if(phone1.length===9){
        document.getElementById("para4").innerHTML= `the ${phone1} is correct`

    }
    else{
        document.getElementById("para4").innerHTML= `the ${phone1} is incorrect`

    }
    if(phone2.length===9){
        document.getElementById("para5").innerHTML= `the ${phone2} is correct`

    }
    else{
        document.getElementById("para5").innerHTML= `the ${phone2} is incorrect`

    }

    var power= Math.pow(32,6)
    document.getElementById("para5").innerHTML= `the answer is ${power}`



    var quantity = "25";
    var number = 6;
    var pressure;
    var temperature = null;

    console.log(quantity += quantity); 
    console.log( (7+5) / number + 2 ); 
    console.log(pressure); 
    console.log(temperature); 
    console.log(typeof pressure); 
    console.log(typeof temperature);
