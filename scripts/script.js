var res = document.querySelector('p#teste')

function NumArt() {
    let caput = document.querySelector('div.inserir')

    let p_a = document.createElement('p')
    let a = document.createElement('input')

    a.setAttribute('type', 'number')
    a.setAttribute('id', 'artigo')
    a.setAttribute('name', 'artigo')

    p_a.innerHTML = 'Número do Artigo'
    caput.appendChild(p_a)
    caput.appendChild(a)

}

function AddCaput() {
    let caput = document.querySelector('div.inserir')

    let p_c = document.createElement('p')
    let c = document.createElement('textarea')

    c.setAttribute('id', 'cap')
    c.setAttribute('name', 'cap')

    p_c.innerHTML = 'Caput'
    caput.appendChild(p_c)
    caput.appendChild(c)
    caput.innerHTML += '<br>'
}

function AddArtigo() {
    NumArt()
    AddCaput()
    let inciso = document.querySelector('div.inserir')
    let i = document.createElement('input')
    i.setAttribute('type', 'submit')
    i.setAttribute('value', 'Novo Inciso')
    i.setAttribute('name', 'novo-inc')
    i.setAttribute('id', 'novo-inc')
    i.addEventListener('click', AddInciso)
    inciso.appendChild(i)  
}

function AddInciso() {
    let inciso = document.querySelector('div.inserir')
    let i = document.createElement('textarea')
    i.setAttribute('id', 'inc')
    inciso.innerHTML += '<br> Inciso <br>'
    inciso.appendChild(i)
    inciso.innerHTML += '<br>'

    let add_inc = document.createElement('input')
    add_inc.setAttribute('type', 'submit')
    add_inc.setAttribute('id', 'add-inc')
    add_inc.setAttribute('value', 'Adicionar')
    inciso.appendChild(add_inc)
    inciso.innerHTML += '<br>'

    let alinea = document.querySelector('div.inserir')
    let a = document.createElement('input')
    a.setAttribute('type', 'submit')
    a.setAttribute('value', 'Nova Alínea')
    a.setAttribute('name', 'nova-ali')
    a.setAttribute('id', 'nova-ali')
    a.addEventListener('click', AddAlinea)
    alinea.appendChild(a)
}

function AddAlinea() {
    let alinea = document.querySelector('div.inserir')
    let a = document.createElement('textarea')
    a.setAttribute('id', 'ali')
    alinea.innerHTML += '<br> Alínea <br>'
    alinea.appendChild(a)
    alinea.innerHTML += '<br>'

    let add_ali = document.createElement('input')
    add_ali.setAttribute('type', 'submit')
    add_ali.setAttribute('id', 'add-ali')
    add_ali.setAttribute('value', 'Adicionar')
    alinea.appendChild(add_ali)
}
