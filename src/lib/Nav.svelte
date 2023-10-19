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
  <!-- 
</div>

<div class="container">
  <input type="text" placeholder="Search..." on:input={updateSearch}> 
  <div class="search"></div>
</div> -->
<input type="checkbox" id="check">
<lable for="check" class="checkbtn">
  <i class="bars"></i>
</lable>


<label class="nav-logo">
      <img class="logo" src="https://toppng.com/uploads/preview/a-little-maid-neko-for-today-kawaii-neko-girl-chibi-11562928180umulz4qslj.png" alt="Site Logo">
</label>

   <ul>
    <li><a class="" href="/">Welcome</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/books">Books</a></li>
    <li><a href="/home">Home</a></li>
   </ul>


</nav>
