<script>
  import { books, searchTerm } from "$lib/store.js";
  
  let bookArray = [];
  let filterTerm = '';

  // Subscription to the books store
  books.subscribe((value) => {
    bookArray = value;
  });

  // Subscription to the search term store
  searchTerm.subscribe((value) => {
    filterTerm = value.toLowerCase();
  });

  // Derived array based on the search term
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
