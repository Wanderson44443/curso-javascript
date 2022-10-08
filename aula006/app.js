/*let listaPokemon = [{
    'nome' : 'pikachu',
    'tipo' : ' eletrico',
    ' foto': 'pikachu.png',
      'numero':'1'
},

{
    'nome' : 'squartle',
    'tipo' : 'água',
    ' foto': 'squartle.png',
  'numero':'2'
}]

let  listaPokemon = document.querySelector(".lista-pokemon")
for(let i=0; i< listaPokemon.length;i++){
    listaPokemon.innerHTML += "<li class='um-pokemon'>"
    listaPokemon.innerHTML +=`<img src="${listaPokemon[i].foto}">`
    listaPokemon.innerHTML +=`<h3>"${listaPokemon[i].nome}"</h3>`
    listaPokemon.innerHTML +=`<h4>"${listaPokemon[i].tipo}"</h4>`
    listaPokemon.innerHTML +=`<h4>"${listaPokemon[i].numero}"</h4>`
    listaPokemon.innerHTML +=`</li>`

} */






let url ='https://pokeapi.co/api/v2/pokemon?limit=151'
fetch(url)
      .then(Response => Response.json())
      .then(function(dados){
        
        for (let i=0; i<dados.results.length;i++){
             
            fnPegaUmPokemon (dados.results[i].url)
        }
        

      })

        function fnPegaUmPokemon(urlPokemon){ 
         fetch(urlPokemon)
         .then(Response => Response.json())
         .then(function(dadosPokemon){
            console.dir(dadosPokemon)
            fnCriarCartao(dadosPokemon.name,dadosPokemon.id,dadosPokemon.types,dadosPokemon.sprites.front_default)
         })
        }
      
function fnCriarCartao(nome,numero,tipo,foto){
    let  listaPokemon = document.querySelector(".lista-pokemon")
    listaPokemon.innerHTML += "<li class='um-pokemon'>"
    listaPokemon.innerHTML +=`<img src="${foto}">`
    listaPokemon.innerHTML +=`<h3>"${nome}"</h3>`
    listaPokemon.innerHTML +=`<h4>"${tipo}"</h4>`
    listaPokemon.innerHTML +=`<h4>"${numero}"</h4>`
    listaPokemon.innerHTML +=`</li>`

}