<!-- Layout.svelte -->
<script>
    export let title;
  </script>
  
  <!-- Import the Header component -->
  <Header />
  
  <main>
    <h1>{title}</h1>
    <slot></slot>
  </main>
  
  <!-- Import the Footer component -->
  <Footer />
  
  <style>
    @import '../assets/main.css';
  </style>
  