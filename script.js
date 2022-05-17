'use strict'


let images = [
    {'id': 1,'url':'./image/Aranha1.jpg'},
    {'id': 2,'url':'./image/Marvel.jpg'},
    {'id': 3,'url':'./image/Aranha2.jpg'},
    {'id': 4,'url':'./image/Capitao.jpg'},
    {'id': 5,'url':'./image/Pantera.jpg'},
    {'id': 6,'url':'./image/mulher.jpg'}
]

const containerItems = document.querySelector('#container-items')

let adicionar = document.querySelector('#adicionar')

let btnAdicionar = document.querySelector('#btnAdicionar')

btnAdicionar.addEventListener('click' , btn)

function btn() {
    btnAdicionar = adicionar.value
    images.push({'id' : Math.random(), 
    url: btnAdicionar})

}
const loadImages = (images , containerItems) => {
    images.forEach ( Image => {
        containerItems.innerHTML += `
            <div class = 'items'>
                <img src = '${Image.url}'
            </div>
        `
    }) 

}


loadImages(images , containerItems)

let items = document.querySelectorAll('.items')

const voltar = () => {
    containerItems.appendChild(items[0]) //append enviando o primeiro item para o final
    items = document.querySelectorAll('.items')
}

const proximo = () => {
    const lestItem = items[items.length - 1]
    containerItems.insertBefore( lestItem, items[0])
    items = document.querySelectorAll('.items')
}

document.querySelector('#voltar').addEventListener('click' , voltar)
document.querySelector('#proximo').addEventListener('click' , proximo)




