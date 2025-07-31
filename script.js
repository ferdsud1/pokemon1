document.addEventListener('DOMContentLoaded', () => {
    const pokedexContainer = document.querySelector('.pokedex-container');

    const pokemons = [
        {
            id: 3,
            name: 'Venusaur',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
            types: ['grass', 'poison']
        },
        {
            id: 4,
            name: 'Charmander',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
            types: ['fire']
        },
        {
            id: 6,
            name: 'Charizard',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
            types: ['fire', 'flying']
        },
        {
            id: 9,
            name: 'Blastoise',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
            types: ['water']
        },
        {
            id: 65,
            name: 'Alakazam',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png',
            types: ['psychic']
        },
        {
            id: 144,
            name: 'Articuno',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png',
            types: ['ice', 'flying']
        },
        {
            id: 150,
            name: 'Mewtwo',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
            types: ['psychic']
        },
        {
    id: 25,
    name: 'Pikachu',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    types: ['electrico']
},

  { id: 1, name: 'Bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', types: ['grass','poison'] },
  { id: 2, name: 'Ivysaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png', types: ['grass','poison'] },
  { id: 3, name: 'Venusaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png', types: ['grass','poison'] },
  { id: 4, name: 'Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png', types: ['fire'] },
  { id: 5, name: 'Charmeleon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png', types: ['fire'] },
  { id: 6, name: 'Charizard', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png', types: ['fire','flying'] },
  { id: 7, name: 'Squirtle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png', types: ['water'] },
  { id: 8, name: 'Wartortle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png', types: ['water'] },
  { id: 9, name: 'Blastoise', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png', types: ['water'] },
  { id: 10, name: 'Caterpie', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png', types: ['bug'] },
  { id: 11, name: 'Metapod', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png', types: ['bug'] },
  { id: 12, name: 'Butterfree', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png', types: ['bug','flying'] },
  { id: 13, name: 'Weedle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png', types: ['bug','poison'] },
  { id: 14, name: 'Kakuna', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png', types: ['bug','poison'] },
  { id: 15, name: 'Beedrill', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png', types: ['bug','poison'] },
  { id: 16, name: 'Pidgey', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png', types: ['normal','flying'] },
  { id: 17, name: 'Pidgeotto', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png', types: ['normal','flying'] },
  { id: 18, name: 'Pidgeot', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png', types: ['normal','flying'] }
    ];

    const createPokemonCard = (pokemon) => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');

        const pokemonImage = document.createElement('img');
        pokemonImage.src = pokemon.image;
        pokemonImage.alt = pokemon.name;

        const pokemonId = document.createElement('p');
        pokemonId.classList.add('pokemon-id');
        pokemonId.textContent = `#${String(pokemon.id).padStart(3, '0')}`;

        const pokemonName = document.createElement('h2');
        pokemonName.classList.add('pokemon-name');
        pokemonName.textContent = pokemon.name;

        const pokemonTypes = document.createElement('div');
        pokemonTypes.classList.add('pokemon-types');
        pokemon.types.forEach(type => {
            const typeBadge = document.createElement('span');
            typeBadge.classList.add('type-badge', type); // Adiciona a classe do tipo para estilização
            typeBadge.textContent = type;
            pokemonTypes.appendChild(typeBadge);
        });

        card.appendChild(pokemonImage);
        card.appendChild(pokemonId);
        card.appendChild(pokemonName);
        card.appendChild(pokemonTypes);

        pokedexContainer.appendChild(card);
    };

    pokemons.forEach(pokemon => {
        createPokemonCard(pokemon);
    });
});