function adicionaItem (event) {
    const main = document.getElementById('container')
    const novoItem = document.createElement('article')
    // const conteudo = document.createTextNode('novoItem')
    // novoItem.appendChild(conteudo)
    main.insertAdjacentElement('beforeend',novoItem)
    novoItem.setAttribute('class', 'item')
    novoItem.setAttribute('onclick', 'removeItem(event)')
}
function removeItem (event) {
    event.target.remove()
}