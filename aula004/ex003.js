/*Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd';*/

let nome = prompt ("informe seu nome")
while(nome.length <=3){
    nome=prompt("Informe seu nome")
}

let idade = prompt ("informe sua idade")
 while(idade < 0 || idade > 150 ){
    idade = prompt(" Informe sua idade")
 }

let Salario= prompt ("informe seu salario")
  while(Salario<=0){
    Salario=prompt("Informe seu salario")
  }



let sexo = prompt ("informe seu sexo ")
while(sexo != 'f' && sexo != 'm')
 sexo=prompt("Informe seu sexo")


let estadoCivil= prompt ("informa seu estado civil"("s-solteiro, c-casado,v-viuvo,d-divorciado"))

while( estadoCivil != 's'&& estadoCivil!='c' && estadoCivil != 'v' && estadoCivil != 'd'){
    estadoCivil=prompt("informa seu estado civil"("s-solteiro, c-casado,v-viuvo,d-divorciado"))
}

function CadastraCliente(){
  let nome = document. querySelector("#nome").value
  if (nome.length < 3) {
    document.querySelector("#erro-nome").innerHTML="<em>O nome deve possuir mais de 3 caracteres </em>"
    document.querySelector("#nome").focus()
    return
  }else{ 
  alert("Cadastro efetuado com suucesso")
  }

}