
//DECLARO EL ELEMENTO QUE CONTENDRA LOS DATOS
productosLista = []; //declaro el array de objetos que contendra las propiedades guardadas

$(() => { //Esto se ejecuta una vez termina de cargar todo el DOM, es algo adicional, no necesario.
    $.getJSON("data/productos.json", (respuesta) => { //Obtenemos los datos desde un JSON 
        productosLista = respuesta;
    })
})

let conteinerCajas = document.querySelector("#conteinerCajas")

// // EVENTO CLICK DEL BOTON ENVIAR 
// Evento cuando le hago click a boton enviar
//1-capturar en una variable lo que tiene cada uno de los inputs
//2-abrir whatsapp y poner en texto todo el contenido de las variables de los inputs

// declaro para capturar los inputs, y mandar el wapp
let inputNombre = document.querySelector("#inputNombre")
let inputEmail = document.querySelector("#inputEmail")
let inputTel = document.querySelector("#inputTel");
let inputMsj = document.querySelector("#inputMsj");
let btnEnviar = document.querySelector("#btnEnviar");//capturo el boton enviar del form


{/* <div>
                  
                  </div>
<img src=${elemento.img} class="imgs"> */}

// // EVENTO CLICK DEL BOTON Productos => bVacuno
let bVacuno = document.querySelector('#bVacuno');
bVacuno.addEventListener('click', (evt) => {
    conteinerCajas.innerText = ``;
    productosLista.map(elemento => {
        if (elemento.tipo === 'vacuno') {
            conteinerCajas.innerHTML += ` 
            <div class= "containers">
                
               <ul>
                   <li> Detalle: ${elemento.nombre}</li> 
                   <li> Precio: ${elemento.precio}</li>     
               </ul>      
            </div> `
        }
    })
    
});






// const renderIndexPrecio = (Desde, Hasta) => {
//     document.querySelector("#displayIndex").innerText = ``
//     listaPropiedadesJSON.map(elemento => {
//         if (elemento.precio >= Desde && elemento.precio <= Hasta) {
//             contenedorFiltros.style.display = "";
//             contenedor.innerHTML += ` 
//             <div class= "contFiltradas">
//             <p>
//             <ul>
//             <li> Tipo: ${elemento.tipo}</li>
//             <li> Dormitorios: ${elemento.dormitorios}</li>
//             <li> Precio: ${elemento.precio}</li>
//             <li> Operacion: ${elemento.operacion}</li>
//             <li> Detalle: ${elemento.detalle}</li> 
//             <li> Fotos: </li> </ul></p>
//             <div class="galerias">
//             <img src=${elemento.img[0]} class="imgs">
//             <img src=${elemento.img[1]} class="imgs">
//             <img src=${elemento.img[2]} class="imgs">
//             </div>
//             </div>
//             <br>
//            `
//         }
//         estilosPanelFiltros();

//     })
//     LimpiarPanelFiltros();
//     panelFiltrosActivos.innerHTML += ` <p> Precio Desde: ${Desde} </p>`;
//     panelFiltrosActivos.innerHTML += ` <p> Precio Hasta: ${Hasta} </p>`;
//     panelFiltrosActivos.style.color = "red";
// }



// function estilosPanelFiltros() {
//     contenedorFiltros.style.display = "";
//     panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
//     panelFiltros.style.margin = "20px";
//     contenedorPrincipal.style.height = "122px";
//     contenedorPrincipal.style.background = "#c0c0c0";
//     comboFiltros.style.display = "none";
// }






// *************************************
// Evento cuando le hago click a boton Productos-->vacuno
// Mostrar en panel principal el dato de los json que tiene el tipo vacuno con sus datos e imagen 
//






// *************************************
// Evento cuando le hago click a boton Productos-->aves
// Mostrar en panel principal el dato de los json que tiene el tipo vacuno con sus datos e imagen 
//


// *************************************
// Evento cuando le hago click a boton Productos-->cerdo
// Mostrar en panel principal el dato de los json que tiene el tipo vacuno con sus datos e imagen 
//


// *************************************
// Evento cuando le hago click a boton Productos-->embutidos
// Mostrar en panel principal el dato de los json que tiene el tipo vacuno con sus datos e imagen 
//

// *************************************
// Evento cuando le hago click a boton Productos-->achuras
// Mostrar en panel principal el dato de los json que tiene el tipo vacuno con sus datos e imagen 
//

// *************************************
// Evento cuando le hago click a boton Productos-->ofertas
// Mostrar en panel principal el dato de los json que tiene el tipo vacuno con sus datos e imagen 
