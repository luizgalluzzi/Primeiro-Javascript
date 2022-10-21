const turnOn = document.getElementById ("turnOn");
const turnOff = document.getElementById ("turnOff");
const lamp = document.getElementById ("lamp");
const aviso = document.getElementById ("aviso");


function islampbroken () {
    return lamp.src.indexOf ("quebrada") > -1
}
function lampOn () {
    if (!islampbroken () ) {
    lamp.src = "assets/Img/acesa.jpg";
    }
}
function lampOff () {
    if (!islampbroken () ) {
    lamp.src = "assets/Img/apagada.jpg";
}
}
function lampbroken () {
    lamp.src = "assets/Img/quebrada.jpg";
    aviso.src = "assets/Img/Avisado.jpg";
}
turnOn.addEventListener ("click", lampOn);
turnOff.addEventListener ("click", lampOff);
lamp.addEventListener ("mouseover", lampOn);
lamp.addEventListener ("mouseleave", lampOff);
lamp.addEventListener ("dblclick", lampbroken);