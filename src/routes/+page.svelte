<script>
    import { books } from '$lib/store.js';
</script>

<div class="wrapper">
  <div class="container">
    
      <div class="banner">
          <h1>Welcome to Our Audiobook Store</h1>
      </div>
    
      <div class="top-three">
          <h2>Top Three of the Month</h2>
          <div class="books-grid">
              {#each $books.slice(0, 3) as book}
                  <div class="book">
                      <img src={book.image} alt={book.title} />
                      <h3>{book.title}</h3>
                      <p>Author: {book.author}</p>
                      <p>Narrator: {book.narrator}</p>
                      <p>Description: {book.description}</p>
                  </div>
              {/each}
          </div>
      </div>
    
      <div class="scrolling-section">
          <div class="books-flex">
              {#each $books as book}
                  <div class="book">
                      <img src={book.image} alt={book.title} />
                      <h3>{book.title}</h3>
                      <p>Author: {book.author}</p>
                      <p>Narrator: {book.narrator}</p>
                      <p>Description: {book.description}</p>
                  </div>
              {/each}
          </div>
      </div>
  </div>
</div>
