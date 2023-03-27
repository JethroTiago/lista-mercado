let listaDeCompras = [];

const formulario = document.getElementById("formulario-itens");
const itensInput = document.getElementById("receber-item");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    salvarItem();
});

function salvarItem() {
    const comprasItem = itensInput.value;
    const checarDuplicado = listaDeCompras.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase());

    if(checarDuplicado) {
        alert("Item já existente!")
    } else {
        listaDeCompras.push ({
            valor: comprasItem
        })
    }
    
    console.log(listaDeCompras);
}
