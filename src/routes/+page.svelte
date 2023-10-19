<script>
    import { onMount } from 'svelte';

    let pokemonList = [];
    let offset = 0; 
    const TOTAL_POKEMON = 151; 
    const BASE_URL = `https://pokeapi.co/api/v2`;

    async function fetchPokemon() {
        const response = await fetch(`${BASE_URL}/pokemon?limit=${TOTAL_POKEMON}&offset=${offset}`);
        const data = await response.json();
        pokemonList = pokemonList.concat(data.results.sort((a, b) => a.name.localeCompare(b.name)));
    }

    function startScrolling() {
        const gallery = document.querySelector('.grid');
        setInterval(() => {
            gallery.scrollLeft += 1;

            if (gallery.scrollLeft >= gallery.scrollWidth - window.innerWidth) {
                offset += TOTAL_POKEMON;
                fetchPokemon();
            }
        }, 20);
    }

    onMount(() => {
        fetchPokemon().then(() => {
            startScrolling();
        });
    });
</script>

<style>
    body {
        margin: 0;
        overflow: hidden;
    }
    
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, 100px);
        grid-template-rows: repeat(4, 100px);
        overflow-x: scroll;
        overflow-y: hidden;
        height: 400px;
        width: 100vw;
        position: relative;
    }

    .grid::-webkit-scrollbar {
        display: none;
    }

    img {
        width: 100px;
        height: 100px;
    }
</style>

<div class="grid">
    {#each pokemonList as pokemon}
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
    {/each}
</div>
