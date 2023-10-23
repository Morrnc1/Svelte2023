<script>
    import { onMount } from 'svelte';
    let images = [];
    
    onMount(async () => {
      const res = await fetch('$lib/images.js');
      images = await res.json();
    });
    
    function navigateToHome() {
      window.location.href = "/home";
    }
  </script>
  
  
  <div class="galaxy" on:click={navigateToHome}>
    <h1>Welcome to the Library</h1>
  </div>
  
  {#each images as image (image.id)}
    <img src={image.url} alt="Galaxy Image" hidden />
  {/each}
  