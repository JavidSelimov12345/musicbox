"use strict"

// function playSound () {
//     document.getElementById('play').play();
// }

const notdo = document.querySelector("#do");

const notre = document.querySelector("#re");
const notmi = document.querySelector("#mi");
const notfa = document.querySelector("#fa");
const notsol = document.querySelector("#sol");
const notlya = document.querySelector("#lya");
const notsi = document.querySelector("#si");

const bnotdo = new Audio("note/note1s.mp3");
const bnotre = new Audio("note/note2s.mp3");
const bnotmi = new Audio("note/note3s.mp3");
const bnotfa = new Audio("note/note4s.mp3");
const bnotsol = new Audio("note/note5s.mp3");
const bnotlya = new Audio("note/note6s.mp3");
const bnotsi = new Audio("note/note7s.mp3");

document.body.onkeydown= function(e){
    // console.log(e.keyCode)
    if(e.keyCode==90){
       
        bnotdo.play()
        // notdo.play()
        
        notdo.parentElement.style.backgroundColor='red'
    }
    if(e.keyCode==88){
        bnotre.play()
    }
    if(e.keyCode==67){
        bnotmi.play()
    }
    if(e.keyCode==86){
        bnotfa.play()
    }
    if(e.keyCode==66){
        bnotsol.play()
    }
    if(e.keyCode==78){
        bnotlya.play()
    }
    if(e.keyCode==77){
        bnotsi.play()
    }
}



