<!-- About page component with dynamic content and image loader -->

<script>
  import { onMount } from "svelte";

  let images = [];
  const bubblesPerClick = 9;
  const maxImages = 15;
  let showBubbles = false;

  // Story content for the about page, split into an array of sentences
  let storyContent = [
    "Deep in the vast expanse of the void, away from the mundane world, there exists a library ",
    "unlike any other. It floats, untethered to time and space, a nexus of ancient knowledge and ",
    "arcane power. Legends speak of wizards and mages who sought the drifting library, hoping ",
    "to borrow its esoteric tomes. Many got lost in the eternal abyss, while a lucky few returned,",
    " their powers magnified tenfold.Now, as you scroll, you embark on this mystical journey,",
    " treading where few dare, seeking the knowledge of the drifting library.",
  ];

  // Function to load images from an API and toggle their display
  async function toggleBubbles() {
    showBubbles = !showBubbles;

    // Load new images if under max limit
    if (showBubbles && images.length < maxImages) {
      for (let i = 0; i < bubblesPerClick && images.length < maxImages; i++) {
        const response = await fetch(`https://picsum.photos/50/50`);
        images = [...images, response.url];
      }
    }
  }

  // Initial check to load images if bubbles are to be shown
  onMount(() => {
    if (showBubbles) {
      toggleBubbles();
    }
  });
</script>

<link rel="stylesheet" href="css/about.css" />

<!-- Main container for the about page content -->
<div class="container">
  <h1 class="title">History Of The Void</h1>
  <!-- Button to toggle the display of images -->
  <button on:click={toggleBubbles} class={showBubbles ? "" : "toggle-off"}
    >{showBubbles ? "Hide Magical Images" : "Discover Magical Images"}</button
  >

  <!-- Paragraphs displaying the story content -->
  <div class="story">
    {#each storyContent as line (line)}
      <p>
        {#each line.split(" ") as word}
          <span>{word}&nbsp;</span>
        {/each}
      </p>
    {/each}
  </div>
</div>

<!-- Conditionally rendered images, displayed if showBubbles is true -->
{#if showBubbles}
  {#each images as imageUrl, index}
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      src={imageUrl}
      alt="A magical image"
      style="left: {Math.random() * 80}%; top: {Math.random() * 80}%;"
    />
  {/each}
{/if}
