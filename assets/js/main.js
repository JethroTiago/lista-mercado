let listaDeCompras = [];
let itemAEditar

const formulario = document.getElementById("formulario-itens");
const itensInput = document.getElementById("receber-item");
const ulItens = document.getElementById("lista-itens");
const ulItensComprados = document.getElementById("lista-itens-comprados");
const listaRecuperada = localStorage.getItem('listaDeCompras');

function atualizaLocalStorage() {
    localStorage.setItem('listaDeCompras', JSON.stringify(listaDeCompras));
};

if(listaRecuperada) {
    listaDeCompras = JSON.parse(listaRecuperada);
    exibeItens();
} else {
    listaDeCompras = [];
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    salvarItem();
    exibeItens();
    itensInput.focus();
});

function salvarItem() {
    const comprasItem = itensInput.value;
    const checarDuplicado = listaDeCompras.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase());

    if (checarDuplicado) {
        alert("Item já existente!")
    } else {
        listaDeCompras.push({
            valor: comprasItem,
            checar: false
        });
    };

    itensInput.value = '';
};

function exibeItens() {
    ulItens.innerHTML = "";
    ulItensComprados.innerHTML = "";

    listaDeCompras.forEach((elemento, indice) => {
        if (elemento.checar) {
            ulItensComprados.innerHTML += `
            <li class="item-compra" data-value="${indice}">
            <div>
                <input type="checkbox" checked class="clicavel" />
                <span class="itens-comprados">${elemento.valor}</span>
            </div>
            <div>
                <i class="fa-solid fa-trash-can deletar"></i>
            </div>
        </li>         
            `
        } else {
            ulItens.innerHTML += `
            <li class="item-compra" data-value="${indice}">
                <div>
                    <input type="checkbox" class="clicavel" />
                    <input type="text" class="size" value="${elemento.valor}" ${indice !== Number(itemAEditar) ? 'disabled' : ''}></input>
                </div>
                <div>
                    ${indice === Number(itemAEditar) ? '<button onclick="salvarEdicao()"><i class="fa-regular fa-floppy-disk is-clickable"></i></button>' : '<i class="fa-regular is-clickable fa-pen-to-square editar"></i>'}
                    <i class="fa-solid fa-trash-can deletar"></i>
                </div>
            </li>
        `
        };
    });

    const inputCheck = document.querySelectorAll('input[type="checkbox"]');
    inputCheck.forEach(i => {
        i.addEventListener('click', (evento) => {
            const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value');
            listaDeCompras[valorDoElemento].checar = evento.target.checked;
            exibeItens();
        });
    });

    const deletarItens = document.querySelectorAll(".deletar");
    deletarItens.forEach(i => {
        i.addEventListener('click', (evento) => {
            valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value');
            listaDeCompras.splice(valorDoElemento, 1);
            exibeItens();
        });
    });

    const editarItens = document.querySelectorAll(".editar")

    editarItens.forEach(i => {
        i.addEventListener("click", (evento) => {
            itemAEditar = evento.target.parentElement.parentElement.getAttribute('data-value');
            exibeItens();
        });
    });

    atualizaLocalStorage();
};

function salvarEdicao() {
    const itemEditado = document.querySelector(`[data-value="${itemAEditar}"] input[type="text"]`);
    listaDeCompras[itemAEditar].valor = itemEditado.value;
    itemAEditar = -1;
    exibeItens();
};