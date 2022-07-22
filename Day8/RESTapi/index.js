async function getPokemon(pokemonNumber) {
  url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
  const resPokemon = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  data = await resPokemon.json();
  const name = data.species.name;
  const sprite = data.sprites.front_default;
  const types = data.types;

  url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber}`;
  const resSpecies = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  data = await resSpecies.json();
  const genera = data.genera;
  const generaFiltered = genera.filter((g) => {
    return g.language.name === "en";
  });
  const genus = generaFiltered[0].genus;
  const flavorTexts = data.flavor_text_entries.filter((ft) => {
    return ft.language.name === "en";
  });
  const flavorText = flavorTexts[0].flavor_text.replace("\f", " ");
  return {
    name: name,
    types: types,
    sprite: sprite,
    number: pokemonNumber,
    flavorText: flavorText,
    genus: genus,
  };
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

pokemonImgElement = document.getElementById("pokemon-picture");
pokemonNameElement = document.getElementById("pokemon-name");
pokemonGentraElement = document.getElementById("pokemon-gentra");
pokemonFlavorTextElement = document.getElementById("pokemon-flavor-text");
pokemonRandomBtn = document.getElementById("random-pokemon-btn");

pokemonRandomBtn.addEventListener("click", () => {
  generatePokemon();
});

function generatePokemon() {
  getPokemon(getRandomNumber()).then((data) => {
    pokemonImgElement.src = data.sprite;
    pokemonName = `${data.name[0].toUpperCase()}${data.name.substring(
      1,
      data.name.length
    )}`;
    pokemonNameElement.textContent = pokemonName;
    pokemonGentraElement.textContent = data.genus;
    pokemonFlavorTextElement.textContent = data.flavorText;
  });
}

generatePokemon();
