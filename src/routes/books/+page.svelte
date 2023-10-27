<script>
  import { books } from '$lib/store.js'; 

  let bookArray = [];
  
  books.subscribe(value => {
    bookArray = value;
  });
</script>

<style>
  .book-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    padding: 2rem;
    background-color: rgba(128, 0, 128, 0.1); 
  }
  
  .book-card {
    border: 1px solid purple;
    border-radius: 5px;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .book-card img {
    max-width: 100%;
    border-radius: 5px;
  }

  h3 {
    font-size: 1.5rem;
    color: purple;
  }

  p {
    font-size: 1rem;
    color: white;
  }
</style>

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
