function enviarFormulario() {
  debugger;
  let inputNombre = document.querySelector("#inputNombre");

  let url = `https://api.whatsapp.com/send?phone=5493815042464&text=Hola!&nbsp;${inputNombre.value}tengo&nbsp;una&nbsp;consulta`;
  window.location = url;
}

$(document).ready(function () {
  function cargarProductos(categoria) {
    // debugger;
    conteinerCajas.innerText = ``;
    productosLista.map((elemento) => {
      if (elemento.tipo == categoria) {
        conteinerCajas.innerHTML += ` 
                <div class= "containerCaja col-3">
                <div class="col">
                        <img src=${elemento.img[0]}>
                </div>
                <div class="col"> 
                    <p>Detalle: ${elemento.nombre}</p>    
                    <p>Precio $: ${elemento.precio}</p> 
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
