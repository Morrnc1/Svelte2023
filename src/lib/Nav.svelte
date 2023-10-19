<!-- navbar.svelte -->
<head>
  <link rel="stylesheet" href="css/nav.css">
</head>

<script>
  import { searchTerm } from "$lib/store.js";  
  let showDropdown = false;

  function toggleDropdown() {
      showDropdown = !showDropdown;
  }

  function closeDropdown() {
      showDropdown = false;
  }

  function updateSearch(e) {
      searchTerm.set(e.target.value); 
  }
</script>

<nav class="navbar">
  <!-- <div class="nav-logo">
    <a href="/" on:click={closeDropdown}>
        <img class="logo" src="https://toppng.com/uploads/preview/a-little-maid-neko-for-today-kawaii-neko-girl-chibi-11562928180umulz4qslj.png" alt="Site Logo">
    </a>
  </div>
  
  <div class="container">
    <input type="text" placeholder="Search..." on:input={updateSearch}> 
    <div class="search"></div>
  </div> -->
  
   <ul>
    <li><aclass="" href="">Welcome</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Books</a></li>
    <li><a href="">Home</a></li>
   </ul>

  


</nav>
