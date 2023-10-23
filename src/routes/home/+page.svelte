<script>
  import { books } from './bookStore.js';
  let bookList = [];

  books.subscribe(value => {
    bookList = value;
  });
</script>

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
</div>