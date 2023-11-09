<script>
  import { onMount } from "svelte";
  let images = [];

  onMount(async () => {
    const res = await fetch("$lib/images.js");
    images = await res.json();
  });

  function navigateToHome() {
    window.location.href = "/home";
  }
</script>

<link rel="stylesheet" href="css/welcome.css" />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="galaxy" on:click={navigateToHome}>
  <h1>Welcome to the Library</h1>
</div>

<!-- svelte-ignore a11y-img-redundant-alt -->
{#each images as image (image.id)}
  <img src={image.url} alt="Galaxy Image" hidden />
{/each}
