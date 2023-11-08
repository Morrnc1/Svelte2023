<script>
  import { books } from "$lib/store.js";

  let bookArray = [];

  books.subscribe((value) => {
    bookArray = value;
  });
</script>

<link rel="stylesheet" href="css/books.css" />

<main class="book-container">
  {#each bookArray as book}
    <div class="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>By: {book.author}</p>
      {#if book.narrator}
        <p>Narrated by: {book.narrator}</p>
      {/if}
    </div>
  {/each}
</main>
