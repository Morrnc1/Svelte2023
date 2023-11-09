<script>
  import { books, searchTerm } from "$lib/store.js";
  
  let bookArray = [];
  let filterTerm = '';
// subscribe is a svelt thing for stores
  books.subscribe((value) => {
    bookArray = value;
  });

  searchTerm.subscribe((value) => {
    filterTerm = value.toLowerCase();
  });

  $: filteredBooks = bookArray.filter((book) =>
    book.title.toLowerCase().includes(filterTerm) ||
    book.author.toLowerCase().includes(filterTerm) ||
    book.genre.toLowerCase().includes(filterTerm)
  );
</script>

<link rel="stylesheet" href="css/books.css" />

<div class="search-container">
  <input
    type="text"
    class="search-bar"
    placeholder="Search by name, author, or genre..."
    on:input="{(e) => searchTerm.set(e.target.value)}"
  />
</div>

<main class="book-container">
  {#each filteredBooks as book}
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
