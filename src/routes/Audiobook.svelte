<!-- Audiobook Page -->
<script>
  export let title;
  export let author;
  export let description;
  export let imagePath;
</script>

<style>
  .book {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .book img {
    max-width: 150px;
    margin-right: 20px;
    border-radius: 5px;
  }

  .book-info {
    flex: 1;
  }

  .book-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
  }

  .book-author {
    font-size: 1rem;
    color: #888;
  }

  .book-description {
    margin-top: 10px;
    color: #555;
  }

  a {
    display: inline-block;
    margin-top: 10px;
    background-color: #007BFF;
    color: #fff;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 5px;
  }
</style>

<div class="book">
  <img src={imagePath} alt={title}>
  <div class="book-info">
    <h2 class="book-title">{title}</h2>
    <p class="book-author">Author: {author}</p>
    <p class="book-description">{description}</p>
    <a href="#">More Info</a>
  </div>
</div>
