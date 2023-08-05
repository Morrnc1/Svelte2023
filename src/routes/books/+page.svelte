

<script>
  let books = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' },
  ];
</script>



<main>
  {#each books as book}
    <div class="book-card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  {/each}
</main>


