let buttom = document.getElementById("buttom");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");

const changrPokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 150) * 1;

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    let data = await fetch(requestString);
    console.log(data);

    let responce = await data.json();
    console.log(responce)

    image.src = responce.sprites.front_default;
    pokeNumber.textContent = `#${responce.id}`;
    pokeName.textContent = responce.name;
}

changrPokemon();
buttom.addEventListener("click", changrPokemon);

