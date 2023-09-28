<!-- navbar.svelte -->
<head>
  <link rel="stylesheet" href="css/nav.css">
</head>

<script>
  import { searchTerm } from "$lib/store.js";  // Include searchTerm
  let showDropdown = false;

  function toggleDropdown() {
      showDropdown = !showDropdown;
  }

  function closeDropdown() {
      showDropdown = false;
  }

  function updateSearch(e) {
      searchTerm.set(e.target.value);  // Update the searchTerm store
  }
</script>

<nav class="navbar">
  <div class="nav-logo">
    <a href="/" on:click={closeDropdown}>
        <img class="logo" src="https://toppng.com/uploads/preview/a-little-maid-neko-for-today-kawaii-neko-girl-chibi-11562928180umulz4qslj.png" alt="Site Logo">
    </a>
  </div>
  
  <div class="container">
    <input type="text" placeholder="Search..." on:input={updateSearch}> <!-- Add on:input handler -->
    <div class="search"></div>
  </div>

  <div class="menu-icon" on:click={toggleDropdown}>
    ☰
  </div>
  
  <div class={showDropdown ? 'dropdown-content show' : 'dropdown-content'}>
    <a href="/home" on:click={closeDropdown}>Home</a>
    <a href="/about" on:click={closeDropdown}>About</a>
    <a href="/books" on:click={closeDropdown}>Books</a>
  </div>

</nav>
