/*
DOM--Doument Object Model
-Àrvore que é criada com os elementos HTML
-Através dessa árvore eu consigo navegar e selecionar/
modificar elementos
-document.getElementById("id do elemento") --> seleciona um elemento através do id
-document.querySelector("")
--("#id do elemento") 
--(".class do elemento")
--("tag")   */

/*function mudarTitulo() {
    document.querySelector("#titulo").innerHTML = "<em>Calculadora 4.0</em>"
}*/

function Multiplicar(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = n1 * n2
    document.querySelector("#resultado").innerHTML = `<strong>${resultado}</strong>`
}
 function Divisao(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = n1 / n2
    document.querySelector("#resultado").innerHTML=`<strong>${resultado}</strong>`
 }
 
 function Subtracao(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = n1 - n2
    document.querySelector("#resultado").innerHTML=`<strong>${resultado}</strong>`
 }
 function  Soma(){
    let  n1 = document.querySelector("#n1").value
     n1= parseInt
    let n2 = document.querySelector("#n2").value
     n2= parseInt
    let resultado = n1  + n2

    document.querySelector("#resultado").innerHTML=`<strong>${resultado}</strong>`
 }