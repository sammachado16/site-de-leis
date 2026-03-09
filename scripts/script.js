var res = document.querySelector('p#teste')

function NumArt() {
    let caput = document.querySelector('form#artigo')

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
    let caput = document.querySelector('form#artigo')

    let p_c = document.createElement('p')
    let c = document.createElement('textarea')

    c.setAttribute('id', 'cap')
    c.setAttribute('name', 'cap')

    p_c.innerHTML = 'Caput'
    caput.appendChild(p_c)
    caput.appendChild(c)
    caput.innerHTML += '<br>'
}

function Botao(texto) {
    let inciso = document.querySelector('form#artigo')
    let i = document.createElement('input')
    i.setAttribute('type', 'submit')
    i.setAttribute('value', `${texto}`)
    i.setAttribute('name', 'novo-inc')
    i.setAttribute('id', 'novo-inc')
    if(texto == 'Novo Inciso') {
         i.addEventListener('click', AddInciso)
        inciso.appendChild(i)
    } else if(texto == 'Inserir Artigo') {
        i.addEventListener('click', ArtigoIns)
        inciso.appendChild(i)
    }
}

function ArtigoIns() {
    let artigos = document.querySelector('section#artigos')
    let artigo = document.createElement('article')
    let titulo = document.createElement('h2')
    titulo.innerHTML = 'Art. 4'
    artigo.setAttribute('id', `art4`)
    artigos.appendChild(artigo)
    artigo.appendChild(titulo)
}

function AddArtigo() {
    NumArt()
    AddCaput()
    Botao('Novo Inciso')
    Botao('Inserir Artigo')
}

function AddInciso() {
    let inciso = document.querySelector('form#artigo')
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

    let alinea = document.querySelector('form#artigo')
    let a = document.createElement('input')
    a.setAttribute('type', 'submit')
    a.setAttribute('value', 'Nova Alínea')
    a.setAttribute('name', 'nova-ali')
    a.setAttribute('id', 'nova-ali')
    a.addEventListener('click', AddAlinea)
    alinea.appendChild(a)
}

function AddAlinea() {
    let alinea = document.querySelector('form#artigo')
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
