let listaDeCompras = [];

const formulario = document.getElementById("formulario-itens");
const itensInput = document.getElementById("receber-item");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    salvarItem();
});

function salvarItem() {
    const comprasItem = itensInput.value
    
    listaDeCompras.push ({
        valor: comprasItem
    });

    console.log(listaDeCompras);
}
