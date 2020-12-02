function getit(){
    var one = document.getElementById("1");
    var two = document.getElementById("2");
    var three = document.getElementById("3");
    var four = document.getElementById("4");
    var five = document.getElementById("5");

    if(one.checked==true)
        console.log("Strongly agree");
    else if(two.checked==true)
    console.log("Somewhat agree");
    else if(three.checked==true)
    console.log("Neither agree nor disagree");
    else if(four.checked==true)
    console.log("Somewhat disagree");
    else
    console.log("Strongly disagree");
}

