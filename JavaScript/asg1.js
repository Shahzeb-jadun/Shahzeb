function Prefix() {
 var userString=document.getElementById("userInput").value;
  
 if(userString.startsWith("py") || userString.startsWith("Py"))
    
    document.getElementById("result").innerHTML=`${userString}`
 
 else
    document.getElementById("result").innerHTML=`py${userString}`

 
}

// Question no 2

function NewString(){
    var Newinput=document.getElementById("NewInput").value;
    var Pos1=document.getElementById("Pos").value;
    var p1=Newinput.slice(0,Pos1)
    var p2=Newinput.slice(Pos1+1,)
    Document.getElementById("NewResult").innerHTML=`${p1}${p2}`


}


// Question no 3

function SwapChar(){

    var idq3 = document.getElementById("q3id").value;

    if (idq3.length <= 1) {
        document.getElementById("idq3").innerHTML=`string is not valid`
    return;
}
    var firstChar = idq3[0];
    var middleChar = idq3[idq3.length-1];
    var LastChar = idq3[idq3.length-1, 1  ];

    var newString= middleChar+ firstChar+LastChar;

    document.getElementById("q3result").textContent="new string"+newString;


}