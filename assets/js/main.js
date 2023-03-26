let listaDeCompras = [];

const formulario = document.querySelector('formulario');
const itensInput = document.querySelector('receber-item');

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
});

function salvarItem() {
    const comprasItem = itensInput.value
    
    listaDeCompras = {
        valor: comprasItem
    }
}