let boton= document.getElementById("boton");
let numeroCuadros = 0;
let contenedor = document.getElementById("contenedor")



function sumarCuadro(){
    let nuevoDiv = document.createElement("div");
    numeroCuadros = numeroCuadros + 1
    nuevoDiv.textContent = "nuevo div" + numeroCuadros;


    nuevoDiv.classList.add("cuadro");

    contenedor.appendChild(nuevoDiv);
}
for (let cont = 0; cont < 16; cont = cont + 1) {
    sumarCuadro();
}



boton.addEventListener("click", sumarCuadro)