//Faça um Programa que leia três números e mostre-os em ordem decrescente.

let n1=1
let n2 =2
let n3=30

if (n1 > n2  && n1 > n3) {
 console.log(n1)
 console.log(n2)
 console.log(n3)

}else if (n2 > n1 && n2 > n3 ){
    console.log(n2)
    console.log(n1)
    console.log(n3)


}else if (n3 > n2 && n3 > n1){

    console.log(n3)
    console.log(n1)
    console.log(n2)
}else if (n1 > n2  && n1 < n3) {
    console.log(n3)
    console.log(n1)
    console.log(n2)


}else if (n2 > n1 && n2 < n3 ){

    console.log(n3)
    console.log(n2)
    console.log(n1)

}else if (n3 > n2 && n3 < n1){
    console.log(n1)
    console.log(n3)
    console.log(n2)
}

