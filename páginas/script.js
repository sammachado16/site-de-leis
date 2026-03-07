var add_inc = document.querySelector('input#add-inc')
var add_alo = document.querySelector('input#add-ali')
var res = document.querySelector('p#teste')

function AddInciso() {
    let inciso = document.querySelector('p#inciso')
    let i = document.createElement('textarea')
    i.setAttribute('id', 'inc')
    inciso.innerHTML = 'Inciso <br>'
    inciso.appendChild(i)
}

function AddAlinea() {
    let alinea = document.querySelector('p#alinea')
    let a = document.createElement('textarea')
    a.setAttribute('id', 'ali')
    alinea.innerHTML = 'Alínea <br>'
    alinea.appendChild(a)
}