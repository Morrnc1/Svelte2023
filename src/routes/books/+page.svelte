<script>
  import { books, selectedGenre, searchTerm } from "$lib/store.js";

  let genres = new Set($books.map(book => book.genre));
  function filterBooks(genre) {
    return $books.filter(book => book.genre === genre && 
      (book.title.toLowerCase().includes($searchTerm.toLowerCase()) || 
       book.author.toLowerCase().includes($searchTerm.toLowerCase())));
  }

  function scrollLeft(event) {
    let container = event.target.closest(".genre-row");
    container.scrollLeft -= 300; 
  }

  function scrollRight(event) {
    let container = event.target.closest(".genre-row");
    container.scrollLeft += 300; 
  }
</script>
<link rel="stylesheet" href="css/books.css" />

<style>
  .genre-row {
    display: flex;
    overflow: hidden;
    width: 100%;
    gap: 20px;
    position: relative;
  }

  .movement {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
  }

  .movement.left { left: 0; }
  .movement.right { right: 0; }

</style>

<main class="book-container">
  {#each genres as genre}
    <h2>{genre}</h2>
    <div class="genre-row">
      <div class="movement left" on:click={scrollLeft}>◀</div>
      {#each filterBooks(genre) as book}
        <div class="book-card">
          <img src={book.image} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      {/each}
      <div class="movement right" on:click={scrollRight}>▶</div>
    </div>
  {/each}
</main>
