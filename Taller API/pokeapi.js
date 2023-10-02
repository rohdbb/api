const baseUrl = 'https://pokeapi.co/api/v2/';
const pokemonName = 'charmander';

const pokemonUrl = `${baseUrl}pokemon/${pokemonName}/`;

fetch(pokemonUrl)
  .then((response) => response.json())
  .then((data) => {
    const nameElement = document.getElementById('pokemonName');
    const heightElement = document.getElementById('pokemonHeight');
    const weightElement = document.getElementById('pokemonWeight');
    const typesElement = document.getElementById('pokemonTypes');

    nameElement.textContent = data.name;
    heightElement.textContent = data.height;
    weightElement.textContent = data.weight;
    typesElement.textContent = data.types.map((type) => type.type.name).join(', ');
  })
  .catch((error) => {
    console.error('Error al obtener la información del Pokémon:', error);
  });
