<head>
  <link rel="stylesheet" href="css/books.css">
</head>
<script>
  let books = [
    { title: 'Book 1', author: 'Author 1', image: 'https://www.buwelldrillers.co.nz/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png' },
    { title: 'Book 2', author: 'Author 2', image: 'https://www.buwelldrillers.co.nz/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png' },
    { title: 'Book 3', author: 'Author 3', image: 'https://www.buwelldrillers.co.nz/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png' },
    { title: 'Book 4', author: 'Author 4', image: 'https://www.buwelldrillers.co.nz/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png' },
    { title: 'Book 5', author: 'Author 5', image: 'https://www.buwelldrillers.co.nz/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png' },
    { title: 'Book 6', author: 'Author 6', image: 'https://www.buwelldrillers.co.nz/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png' },
    
  ];
</script>

<main class="book-container">
  {#each books as book}
    <div class="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  {/each}
</main>


