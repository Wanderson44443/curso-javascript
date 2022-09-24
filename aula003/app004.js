let pokemonNome =["pikachu","charmander","bulbasouro","squirtle"]

let pokemonFoto = [
    
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",

    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    "foto https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"]

    for (let i = 0; i < pokemonNome.length; i++){
        
        document.write("<div class='umpokemon'>")
        document.write('<h3>${pokemonNome[i]}</h3>')

        document.write('<img src="${pokemonFoto[i]}" alt="${pokemonNome[i]}">')
        document.write("</div>")
    }
    

