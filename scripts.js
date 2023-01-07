
// funcion cambio de imagen de fondo/
let cont = 0
function backgroundImage(){
    if (cont == 0){
       document.body.style.backgroundImage = "url('img/gray-background-wallpaper-3.jpg')";
       cont++;
    } else {
        document.body.style.backgroundImage = "url('img/cv_background_1.jpg')";
        cont--;
    }    
}

// funcion ir al inicio/
let mybutton = document.getElementById("button_top");
function goTopFunction() {
    document.documentElement.scrollTo({top: 0});
}


