let num1 = document.getElementById('num1').value
let num2 = document.getElementById('num2').value
function reset(){
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let res = document.getElementById('result')
    res.innerHTML = ""
    num1.value = ""
    num2.value = ""
}

function sum(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let n1 = Number(num1)
    let n2 = Number(num2)
    let res = document.getElementById('result')
    let soma = n1 + n2
    res.innerHTML = `a Soma entre ${n1} e ${n2} é ` + soma
}

function sub(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let n1 = Number(num1)
    let n2 = Number(num2)
    let res = document.getElementById('result')
    let sub = n1 - n2
    res.innerHTML = `a subtração entre ${n1} e ${n2} é ` + sub
}

function mult(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let n1 = Number(num1)
    let n2 = Number(num2)
    let res = document.getElementById('result')
    let multp = n1 * n2
    res.innerHTML = `A multiplicação entre ${n1} e ${n2} é ` + multp
}

function div(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let n1 = Number(num1)
    let n2 = Number(num2)
    let res = document.getElementById('result')
    let divs = n1 / n2
    res.innerHTML = `A divisão entre ${n1} e ${n2} é ` + divs.toFixed(2)
}

