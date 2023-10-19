<script>
  import { books, selectedGenre, searchTerm } from "$lib/store.js";  
</script>
<link rel="stylesheet" href="css/books.css" />
<main class="book-container">
  {#each $books as book}
    {#if ($selectedGenre === "All" || book.genre === $selectedGenre) && (book.title.toLowerCase().includes($searchTerm.toLowerCase()) || book.author.toLowerCase().includes($searchTerm.toLowerCase()) || book.genre.toLowerCase().includes($searchTerm.toLowerCase()))}
      <div class="book-card">
        <img src={book.image} alt={book.title} />
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
    {/if}
  {/each}
</main>
