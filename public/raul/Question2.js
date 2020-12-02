function getit(){
    var one = document.getElementById("1");
    var two = document.getElementById("2");
    var three = document.getElementById("3");
    var four = document.getElementById("4");
    var five = document.getElementById("5");

    if(one.checked==true)
        console.log("No nonsense");
    else if(two.checked==true)
    console.log("Empathetic");
    else if(three.checked==true)
    console.log("Individual");
    else if(four.checked==true)
    console.log("Hard-worker");
    else
    console.log("Direct");
}