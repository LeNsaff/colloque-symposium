//vars and const
const btns = document.getElementById('btns');
const ctn1 = document.getElementById('popctn1');
const ctn2 = document.getElementById('popctn2');

var popup = document.getElementById('popup');
var logbtn = document.getElementById('logbtn')
var popupc = document.getElementById('popupc')

var buttonIds = ["button1", "button2", "button3", "button4", "button5"];
var main1 = document.getElementById("main1");
var main2 = document.getElementById("main2");
var main3 = document.getElementById("main3");
var main4 = document.getElementById("main4");
var main5 = document.getElementById("main5");

const resp1 =document.getElementById("resp1");
const resp2 =document.getElementById("resp2");
var afpIds = ["afp1", "afp2"];

function defile() {
    var buttonId = this.id;
    console.log("Button clicked:", buttonId);

    if (buttonId === "button1") {
        main1.style.display = 'flex';
        main2.style.display = 'none';
        main3.style.display = 'none';
        main4.style.display = 'none';
        main5.style.display = 'none';
        button1.style.border = 'solid $color2'
        button1.style.color = '$color2'
    } else if (buttonId === "button2") {
        main2.style.display = 'flex';
        main1.style.display = 'none';
        main3.style.display = 'none';
        main4.style.display = 'none';
        main5.style.display = 'none';
        button2.style.border = 'solid $color2'
        button2.style.color = '$color2'
    } else if (buttonId === "button3") {
        main3.style.display = 'flex';
        main2.style.display = 'none';
        main1.style.display = 'none';
        main4.style.display = 'none';
        main5.style.display = 'none';
        button3.style.border = 'solid $color2'
        button3.style.color = '$color2'
    }else if (buttonId === "button4") {
        main4.style.display = 'flex';
        main2.style.display = 'none';
        main1.style.display = 'none';
        main3.style.display = 'none';
        main5.style.display = 'none';
        button4.style.border = 'solid $color2'
        button4.style.color = '$color2'
    }else if (buttonId === "button5") {
        main5.style.display = 'flex';
        main2.style.display = 'none';
        main1.style.display = 'none';
        main3.style.display = 'none';
        main4.style.display = 'none';
        button5.style.border = 'solid $color2'
        button5.style.color = '$color2'
    }
}

// assigner les bouton
buttonIds.forEach(function(buttonId) {
    document.getElementById(buttonId).addEventListener("click", defile);
});

function defile2(){
    ctn1.style.display = 'none'
    ctn2.style.display = 'flex'
}


function displaypop(){
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

function displaypop1(){
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    ctn2.style.display = 'none'
    ctn1.style.display = 'flex'
}

function aficher(){
    var afpId = this.id;
    console.log("Button clicked:", afpId);
    if(afpId === 'afp1'){
        afp1.style.display = 'none';
        resp1.style.height ='auto';
    } else if( afpId === 'afp2'){
        afp2.style.display = 'none';
        resp2.style.height ='auto';
    }
}

document.getElementById('afp1').addEventListener('click', aficher);
document.getElementById('afp2').addEventListener('click', aficher);

function mail() {
    let parms = {
        nom: document.getElementById('nom').value,
        prenom: document.getElementById('prenom').value,
        email: document.getElementById('email').value,
        tel: document.getElementById('tel').value,
        pays: document.getElementById('pays').value,
        taf: document.getElementById('taf').value,
        eta: document.getElementById('eta').value,
        pres: document.getElementById('pres').value,
    };
    if (parms.eta == "") {
        alert("Inscription incomplete");
    }
    if(parms.nom == ""){
        alert("Inscription incomplete");
    }
    if(parms.prenom==""){
        alert("Inscription incomplete");
    }
    if(parms.taf==""){
        alert("Inscription incomplete");
    }
    if(parms.tel==""){
        alert("Inscription incomplete");
    }
    if(parms.pays==""){
        alert("Inscription incomplete");
    }
    if(parms.email==""){
        alert("Inscription incomplete");
    }
    if(parms.pres==""){
        alert("Inscription incomplete");
    }
    else {
        emailjs.send("service_lebiwhy", "template_6vxby34", parms)
        .then(function() {
            alert("Inscription envoyée");
        })
    } 
}
