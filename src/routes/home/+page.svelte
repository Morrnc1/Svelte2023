<script>
  import { books } from '$lib/store.js';

  let bookList = [];
  books.subscribe(data => bookList = data);
</script>
  <link rel="stylesheet" href="css/home.css" />

<div id="banner">
  <h1>Explore a Universe of Books</h1>
</div>

<div id="content">
  <div id="top-three">
    <h2>Top Three</h2>
    {#each bookList.slice(0, 3) as book}
      <div class="book">
        <img src="{book.image}" alt="{book.title}">
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
      </div>
    {/each}
  </div>
  
  <div id="book-slider">
    {#each bookList as book}
      <div class="book-slide">
        <img src="{book.image}" alt="{book.title}">
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Narrator: TBD</p>
        <p>Description: TBD</p>
      </div>
    {/each}
  </div>
</div>