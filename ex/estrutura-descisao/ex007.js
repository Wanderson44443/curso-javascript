//Faça um Programa que leia três números e mostre o maior e o menor deles.

let n1 = 1
let n2 = 9
let n3 = 4
let maior = 0, menor = 0

if (n1 > n2 && n1 > n3) {
    maior = n1

} else if (n2 > n1 && n2 > n3) {

    maior = n2

} else if (n3 > n1 && n3 > n2) {
    maior = n3
}




if (n1 < n2 && n1 < n3) {
    menor = n1

} else if (n2 < n1 && n2 < n3) {

    menor = n2

} else if (n3 < n1 && n3 < n2) {
    menor = n3
}



console.log("maior", maior)
console.log("menor", menor)