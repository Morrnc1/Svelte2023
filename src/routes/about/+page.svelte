<script>
  import { onMount } from "svelte";

  let images = [];
  const bubblesPerClick = 9;
  const maxImages = 15;
  let showBubbles = false;

  let storyContent = [
    "Deep in the vast expanse of the void, away from the mundane world, there exists a library ",
    "unlike any other. It floats, untethered to time and space, a nexus of ancient knowledge and ",
    "arcane power. Legends speak of wizards and mages who sought the drifting library, hoping ",
    "to borrow its esoteric tomes. Many got lost in the eternal abyss, while a lucky few returned,",
    " their powers magnified tenfold.Now, as you scroll, you embark on this mystical journey,",
    " treading where few dare, seeking the knowledge of the drifting library.",
  ];

  async function toggleBubbles() {
    showBubbles = !showBubbles;

    if (showBubbles && images.length < maxImages) {
      for (let i = 0; i < bubblesPerClick && images.length < maxImages; i++) {
        const response = await fetch(`https://picsum.photos/50/50`);
        images = [...images, response.url];
      }
    }
  }

  onMount(() => {
    if (showBubbles) {
      toggleBubbles();
    }
  });
</script>

<link rel="stylesheet" href="css/about.css" />

<div class="container">
  <h1 class="title">History Of The Void</h1>
  <button on:click={toggleBubbles} class={showBubbles ? "" : "toggle-off"}
    >{showBubbles ? "Hide Magical Images" : "Discover Magical Images"}</button
  >
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
