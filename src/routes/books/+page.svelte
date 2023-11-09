<!-- Books page component for displaying and searching through a list of books -->

<script>
  import { books, searchTerm } from "$lib/store.js";
  
  let bookArray = [];
  let filterTerm = '';

  // Subscribing to the books store to get updates when the store's state changes
  books.subscribe((value) => {
    bookArray = value;
  });

  // Subscribing to the searchTerm store to get updates and convert them to lowercase
  searchTerm.subscribe((value) => {
    filterTerm = value.toLowerCase();
  });

  // Reactive statement to filter books based on the filterTerm when bookArray or filterTerm changes
  $: filteredBooks = bookArray.filter((book) =>
    book.title.toLowerCase().includes(filterTerm) ||
    book.author.toLowerCase().includes(filterTerm) ||
    book.genre.toLowerCase().includes(filterTerm)
  );
</script>

<link rel="stylesheet" href="css/books.css" />

<!-- Search bar container -->
<div class="search-container">
  <input
    type="text"
    class="search-bar"
    placeholder="Search by name, author, or genre..."
    on:input="{(e) => searchTerm.set(e.target.value)}"
  />
</div>

<!-- Main container that holds the book cards -->
<main class="book-container">
  {#each filteredBooks as book}
      <!-- Book card displaying the book's image, title, and author -->
    <div class="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>By: {book.author}</p>
      <!-- Optional narrator information, displayed if present -->
      {#if book.narrator}
        <p>Narrated by: {book.narrator}</p>
      {/if}
    </div>
  {/each}
</main>
