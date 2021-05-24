let valores = []

function click0(){
    let tela = document.getElementById('tela').value += 0
    valores.push(0)
}

function click1(){
    let tela = document.getElementById('tela').value += 1
    valores.push(1)
}

function click2(){
    let tela = document.getElementById('tela').value += 2
    valores.push(2)
}

function click3(){
    let tela = document.getElementById('tela').value += 3
    valores.push(3)
}

function click4(){
    let tela = document.getElementById('tela').value += 4
    valores.push(4)
}

function click5(){
    let tela = document.getElementById('tela').value += 5
    valores.push(5)
}

function click6(){
    let tela = document.getElementById('tela').value += 6
    valores.push(6)
}

function click7(){
    let tela = document.getElementById('tela').value += 7
    valores.push(7)
}

function click8(){
    let tela = document.getElementById('tela').value += 8
    valores.push(8)
}

function click9(){
    let tela = document.getElementById('tela').value += 9
    valores.push(9)
}

function limpa(){
    let tela = document.getElementById('tela').value = ""
}

function sum(){
    let numero = 0
    for (const key in valores){
        numero += key
    }
    alert(`a soma foi de ${numero}`)
}
