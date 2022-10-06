const turnOn = document.getElementById ("turnOn");
const turnOff = document.getElementById ("turnOff");
const lamp = document.getElementById ("lamp");

function islampbroken () {
    return lamp.src.indexOf ("quebrada") > -1
}
function lampOn () {
    if (!islampbroken () ) {
    lamp.src = "./Img/acesa.jpg";
    }
}
function lampOff () {
    if (!islampbroken () ) {
    lamp.src = "./Img/apagada.jpg";
}
}
function lampbroken () {
    lamp.src = "./Img/quebrada.jpg";
}
turnOn.addEventListener ("click", lampOn);
turnOff.addEventListener ("click", lampOff);
lamp.addEventListener ("mouseover", lampOn);
lamp.addEventListener ("mouseleave", lampOff);
lamp.addEventListener ("dblclick", lampbroken);