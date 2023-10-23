<script>
  import { books } from '$lib/store.js';
  let bookList = [];

  books.subscribe(value => {
    bookList = value;
  });
  
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
        <img src={book.image} alt={book.title} />
        <div>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
        </div>
      </div>
    {/each}
  </div>

  <div id="book-slider">
    <button class="slider-arrow" id="prev">❮</button>
    {#each bookList as book}
      <div class="book-slide">
        <img src={book.image} alt={book.title} />
        <div>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
        </div>
      </div>
    {/each}
    <button class="slider-arrow" id="next">❯</button>
  </div>
</div>