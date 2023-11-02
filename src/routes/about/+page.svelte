<script>
  import { onMount } from 'svelte';

  let images = [];
  const bubblesPerClick = 9;
  const maxImages = 15;

  let storyContent = [
    "Deep in the vast expanse of the void, away from the mundane world, there exists a library unlike any other.",
    "It floats, untethered to time and space, a nexus of ancient knowledge and arcane power.",
    "Legends speak of wizards and mages who sought the drifting library, hoping to borrow its esoteric tomes.",
    "Many got lost in the eternal abyss, while a lucky few returned, their powers magnified tenfold.",
    "Now, as you scroll, you embark on this mystical journey, treading where few dare, seeking the knowledge of the drifting library."
  ];

  async function fetchRandomImages() {
    for (let i = 0; i < bubblesPerClick; i++) {
      const response = await fetch(`https://picsum.photos/50/50`);
      const newImageUrl = response.url;
      if (images.length < maxImages) {
        images = [...images, newImageUrl];
      }
    }
  }
</script>

<style>
  body {
    font-family: 'Arial', sans-serif;
    background-color: #030317;
    color: #fff;
    overflow: hidden; 
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2em;
    text-align: center;
    position: relative;
    overflow: hidden; 
  }
  .title {
    font-size: 2.5em;
    margin-bottom: 1em;
  }

  button {
    padding: 0.5em 1em;
    background: linear-gradient(to right, #6D5BBA, #8D58B5);
    border: none;
    border-radius: 25px;
    color: #fff;
    box-shadow: 0 0 10px rgba(141,88,181,.5);
    cursor: pointer;
    transition: transform .2s;
  }

  button:hover {
    transform: scale(1.05);
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    animation: float 5s infinite;
    opacity: 0.7;
    box-shadow: 0 0 10px #6D5BBA;
    transform: translateY(0);
  }

  @keyframes float {
    0% { transform: translateY(0); }
    100% { transform: translateY(-100vh); }
  }

  .story {
    margin-top: 30px;
    font-size: 1.2em;
    background: rgba(0, 0, 0, 0.5);
    padding: 15px;
    border-radius: 10px;
  }

  .story span {
    transition: color 0.5s;
    cursor: pointer;
  }

  .story span:hover {
    color: #8D58B5;
    text-shadow: 0 0 5px #8D58B5;
  }
</style>

<div class="container">
  <h1 class="title">The Drifting Library of Magic</h1>
  <button on:click={fetchRandomImages}>Discover Magical Images</button>
  {#each images as imageUrl, index}
    <img src={imageUrl} alt="A magical image" style="left: {Math.random() * 80}%; top: {Math.random() * 80}%;" />
  {/each}
  <div class="story">
    {#each storyContent as line (line)}
      <p>
        {#each line.split(' ') as word}
          <span>{word}&nbsp;</span>
        {/each}
      </p>
    {/each}
  </div>
</div>
