<script>
  import { onMount } from 'svelte';

  let images = [];
  const bubblesPerClick = 8;
  const maxImages = 15;

  async function fetchRandomImages() {
    for (let i = 0; i < bubblesPerClick; i++) {
      const response = await fetch('https://picsum.photos/50/50'); 
      const newImageUrl = response.url;
      if (images.length < maxImages) {
        images = [{ url: newImageUrl, id: Date.now() + i }, ...images];
      }
    }
  }

  let yOffset = 0;
  onMount(() => {
    window.addEventListener('scroll', () => {
      yOffset = window.pageYOffset;
    });
  });
</script>

<style>
  body {
    font-family: 'Arial', sans-serif;
    background-color: #030317;
    color: #fff;
    overflow-x: hidden;
    overflow: hidden;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2em;
    text-align: center;
    position: relative;
  }

  .title {
    font-size: 2.5em;
    margin-bottom: 1em;
  }

  button {
    padding: 0.5em 1em;
    font-size: 1em;
    cursor: pointer;
    background: linear-gradient(to right, #6D5BBA, #8D58B5);
    border: none;
    border-radius: 25px;
    color: #fff;
    box-shadow: 0 0 10px rgba(141,88,181,.5);
    transition: transform .2s;
  }

  button:hover {
    transform: scale(1.05);
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(141,88,181,.7);
    position: absolute;
    animation: float 8s infinite;
    opacity: 0.7;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
      opacity: 0.7;
      left: calc(20% + 60vw * var(--random-factor)); 
      top: calc(20% + 60vh * var(--random-factor));
    }
    50% {
      transform: translateY(-20vh);
      opacity: 1;
      left: calc(10% + 80vw * var(--random-factor));
      top: calc(10% + 80vh * var(--random-factor));
    }
  }

  .story {
    margin: 50px auto;
    padding: 20px;
    width: 70%;
    background: rgba(0, 0, 0, 0.8); 
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transition: opacity 1s;
  }

  .story p {
    transition: color 0.5s;
  }

  .story p:hover {
    color: #8D58B5; 
    text-shadow: 0 0 5px #8D58B5; 
  }

</style>

<div class="container">
  <h1 class="title">The Drifting Library of Magic</h1>
  <button on:click={fetchRandomImages}>Discover Magical Images</button>
  {#each images as image (image.id)}
    <img src={image.url} alt="A magical image from the library" style="--random-factor: {Math.random()}" />
  {/each}
</div>
<div class="story">
  <p>Deep in the vast expanse of the void, away from the mundane world, there exists a library unlike any other.</p>
  <p>It floats, untethered to time and space, a nexus of ancient knowledge and arcane power.</p>
  <p>Legends speak of wizards and mages who sought the drifting library, hoping to borrow its esoteric tomes.</p>
  <p>Many got lost in the eternal abyss, while a lucky few returned, their powers magnified tenfold.</p>
  <p>Now, as you scroll, you embark on this mystical journey, treading where few dare, seeking the knowledge of the drifting library.</p>
</div>
