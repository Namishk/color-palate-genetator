let l1 = false;
let l2 = false;
let l3 = false;
let l4 = false;

let c1 = randomColor();
let c2 = randomColor();
let c3 = randomColor();
let c4 = randomColor();

let col1 = document.getElementById("color1");
let col2 = document.getElementById("color2");
let col3 = document.getElementById("color3");
let col4 = document.getElementById("color4");


let clr1 = document.getElementById("clr1");
let clr2 = document.getElementById("clr2");
let clr3 = document.getElementById("clr3");
let clr4 = document.getElementById("clr4");

function randomColor(){
    let r = Math.floor(Math.random()*256 +1);
    let g = Math.floor(Math.random()*256 +1);
    let b = Math.floor(Math.random()*256 +1);
    return "rgb("+r+", "+g+", "+b+")";
}

function refresh(){
    c1 = randomColor();
    c2 = randomColor();
    c3 = randomColor();
    c4 = randomColor();

    if(!l1) {
        col1.style.backgroundColor = c1;
        clr1.innerText = c1;
    }
    if(!l2) {
        col2.style.backgroundColor = c2;
        clr2.innerText = c2;
    }
    if(!l3) {
        col3.style.backgroundColor = c3;
        clr3.innerText = c3;
    }
    if(!l4) {
        col4.style.backgroundColor = c4;
        clr4.innerText = c4;
    }

    
}

function lock(n){
    switch(n){
        case 1: l1 = !l1; break;
        case 2: l2 = !l2; break;
        case 3: l3 = !l3; break;
        case 4: l4 = !l4; break;
    }

    if(l1) document.getElementById("lock1").style.color = "#fff";
    else document.getElementById("lock1").style.color = "#000";

    if(l2) document.getElementById("lock2").style.color = "#fff";
    else document.getElementById("lock2").style.color = "#000";

    if(l3) document.getElementById("lock3").style.color = "#fff";
    else document.getElementById("lock3").style.color = "#000";

    if(l4) document.getElementById("lock4").style.color = "#fff";
    else document.getElementById("lock4").style.color = "#000";
}

function copy(n){
    var cTxt;
    switch(n){
        case 1: cTxt = c1; break;
        case 2: cTxt = c2; break;
        case 3: cTxt = c3; break;
        case 4: cTxt = c4; break;
    }
    navigator.clipboard.writeText(cTxt).then(function(){
        console.log("OK")
    }, function(){
        console.log("ERR")
    });
}

col1.style.backgroundColor = c1;
col2.style.backgroundColor = c2;
col3.style.backgroundColor = c3;
col4.style.backgroundColor = c4;

clr1.innerText = c1;
clr2.innerText = c2;
clr3.innerText = c3;
clr4.innerText = c4;
