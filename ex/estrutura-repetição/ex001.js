/*Supondo que a população de um país A seja da ordem de 80.000 habitantes com uma 
taxa anual de crescimento de 3% e que a população de B seja 200.000 habitantes com uma taxa de crescimento de 1.5%. 
Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale 
a população do país B, mantidas as taxas de crescimento.*/

let paisA=80.000
let paisB=200.000
let taxaA = 3
let taxaB = 1.5
 anos=0
 if ( paisA<paisB ){
    anos=paisA +(paisA*taxaA)
     anos=paisB +(paisB*taxaB)

 }
 console.log(anos)
  xx