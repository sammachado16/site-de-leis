var res = document.querySelector('p#teste')

function AddInciso() {
    let inciso = document.querySelector('p#inciso')
    let i = document.createElement('textarea')
    i.setAttribute('id', 'inc')
    inciso.innerHTML = 'Inciso <br>'
    inciso.appendChild(i)
    inciso.innerHTML += '<br>'

    let add_inc = document.createElement('input')
    add_inc.setAttribute('type', 'submit')
    add_inc.setAttribute('id', 'add-inc')
    add_inc.setAttribute('value', 'Adicionar')
    inciso.appendChild(add_inc)
}

function AddAlinea() {
    let alinea = document.querySelector('p#alinea')
    let a = document.createElement('textarea')
    a.setAttribute('id', 'ali')
    alinea.innerHTML = 'Alínea <br>'
    alinea.appendChild(a)
    alinea.innerHTML += '<br>'

    let add_ali = document.createElement('input')
    add_ali.setAttribute('type', 'submit')
    add_ali.setAttribute('id', 'add-ali')
    add_ali.setAttribute('value', 'Adicionar')
    alinea.appendChild(add_ali)
}
