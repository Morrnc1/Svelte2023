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
  
  <style>
   
  
    .galaxy {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60vh;
    }
  
    h1 {
      color: white;
      font-size: 8em;
      cursor: pointer;
    }
  
    h1:hover {
      color: purple;
      text-shadow: 0 0 10px purple;
      animation: distort 1s infinite;
    }
  
    @keyframes distort {
      0%, 100% { transform: rotate(0); }
      50% { transform: rotate(3deg); }
    }
  </style>
  
  <div class="galaxy" on:click={navigateToHome}>
    <h1>Welcome to the Library</h1>
  </div>
  
  {#each images as image (image.id)}
    <img src={image.url} alt="Galaxy Image" hidden />
  {/each}
  