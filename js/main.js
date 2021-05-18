function enviarFormulario() {
  debugger;
  let inputNombre = document.querySelector("#inputNombre");

  let url = `https://api.whatsapp.com/send?phone=5493815042464&text=Hola!&nbsp;${inputNombre.value}tengo&nbsp;una&nbsp;consulta`;
  window.location = url;
}

$(document).ready(function () {
  function cargarProductos(categoria) {
    // debugger;
    containerCajas.innerText = ``;
    productosLista.map((elemento) => {
      if (elemento.tipo == categoria) {
        containerCajas.innerHTML += ` 
                <div class= "containerCaja col-2 col-xl-3">
                <div class="col-12 cajaImagen">
                        <img class="imgs" src=${elemento.img[0]}>
                </div>
                <div class="col-12 cajaDetalle"> 
                    <p> ${elemento.nombre}</p>    
                    <h5>$${elemento.precio}</h5> 
                    <span>Por Kg</span>
                </div>
                </div> `;
      }
    });
  }

  //DECLARO EL ELEMENTO QUE CONTENDRA LOS DATOS
  productosLista = []; //declaro el array de objetos que contendra las propiedades guardadas

  $(() => {
    $.getJSON("data/productos.json", (respuesta) => {
      productosLista = respuesta;
      const urlParams = new URLSearchParams(window.location.search);
      const myParam = urlParams.get("categoria");
      if (myParam) {
        cargarProductos(myParam);
      }
    });
  });
});
