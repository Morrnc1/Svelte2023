<!-- Layout.svelte -->
<script>
    export let title;
  </script>
  
  <!-- Import the Header component -->
  <!-- svelte-ignore missing-declaration -->
  <Header />
  
  <main>
    <h1>{title}</h1>
    <slot></slot>
  </main>
  
  <!-- Import the Footer component -->
  <!-- svelte-ignore missing-declaration -->
  <Footer />
  
  <style>
    @import '$lib/main.css';
  </style>
  