let listaDeCompras = [];

const formulario = document.getElementById("formulario-itens");
const itensInput = document.getElementById("receber-item");
const ulItens = document.getElementById("lista-itens");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    salvarItem();
    exibeItens();   
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

function exibeItens() {
    ulItens.innerHTML = "";
    listaDeCompras.forEach((elemento, indice) => {
        ulItens.innerHTML += `
            <li class="item-compra" data-value="${indice}">
                <div>
                    <input type="checkbox" class="clicavel" />
                    <input type="text" class="size" value="${elemento.valor}"></input>
                </div>
                <div>
                    <i class="deletar"></i>
                </div>
            </li>
        `
    })
}