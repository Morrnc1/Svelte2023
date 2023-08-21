<head>
  <link rel="stylesheet" href="css/books.css">
</head>
<script>
  let books = [
    { title: 'The Primal Hunter', author: 'Zogarth', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1642013459i/60111529.jpg' },
    { title: 'Defiance Of The Fall', author: 'TheFirstDefier', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1619486020i/57866482.jpg' },
    { title: 'He Who Fights With Monsters', author: 'Shirtaloon', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1614114118i/57189884.jpg' },
    { title: 'All The SKills', author: 'Honour Rae', image: 'https://www.royalroadcdn.com/public/covers-large/55687-all-the-skills-a-deckbuilding-litrpg.jpg?time=1660799721' },
    { title: 'Dungeon Carawler Carl', author: 'Matt Dinniman', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595600712i/54659324.jpg' },
    { title: 'System Universe', author: 'SunriseCV', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1658172758i/61588227.jpg' },
    
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


