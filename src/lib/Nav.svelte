<!-- Navigation component with toggleable menu -->

<script>
    let showMenu = false;

    function toggleMenu() {
        showMenu = !showMenu;
    }

    function collapseMenu() {
        showMenu = false;
    }
</script>

<link rel="stylesheet" href="css/nav.css" />

<!-- Menu toggle button -->
<div class="toggle" on:click={toggleMenu} />

<!-- Sidebar menu, visible on 'showMenu' -->
<div class={`sidebar ${showMenu ? "show" : ""}`} on:mouseleave={collapseMenu}>
    <h3>Menu</h3>
    <!-- Navigation links with submenu for books -->
    <ul>
        <li><a href="/home" on:click={collapseMenu}>Home</a></li>
        <li>
            <!-- Books dropdown toggle -->
            <a href="/books">Books</a>
            <div class="submenu" on:hover={toggleMenu}>
                <!-- Submenu items -->
                <ul>
                    <li>
                        <a href="/books?genre=litrpg" on:click={collapseMenu}
                            >LitRPG</a
                        >
                    </li>
                    <li>
                        <a
                            href="/books?genre=apocalypse"
                            on:click={collapseMenu}>Apocalypse</a
                        >
                    </li>
                    <li>
                        <a
                            href="/books?genre=cultivation"
                            on:click={collapseMenu}>Cultivation</a
                        >
                    </li>
                </ul>
            </div>
        </li>
        <li><a href="/about" on:click={collapseMenu}>About</a></li>
    </ul>
</div>
