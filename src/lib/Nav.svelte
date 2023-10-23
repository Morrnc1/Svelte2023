<script>
  let showMenu = false;

  function toggleMenu() {
      showMenu = !showMenu;
  }

  function collapseMenu() {
      showMenu = false;
  }
</script>
<div class="toggle" on:click={toggleMenu}></div>
<div class={`sidebar ${showMenu ? 'show' : ''}`} on:mouseleave={collapseMenu}>
    <h3>Menu</h3>
    <ul>
        <li><a href="/home" on:click={collapseMenu}>Home</a></li>
        <li>
            <a href="/books">Books</a>
            <div class="submenu">
                <ul>
                    <li><a href="/books?genre=litrpg" on:click={collapseMenu}>LitRPG</a></li>
                    <li><a href="/books?genre=apocalypse" on:click={collapseMenu}>Apocalypse</a></li>
                    <li><a href="/books?genre=cultivation" on:click={collapseMenu}>Cultivation</a></li>
                </ul>
            </div>
        </li>
        <li><a href="/about" on:click={collapseMenu}>About</a></li>
    </ul>
</div>