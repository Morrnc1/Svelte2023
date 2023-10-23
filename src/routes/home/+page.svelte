<script>
  import { books } from '$lib/store.js';
  let bookList = [];

  books.subscribe(value => {
    bookList = value;
  });
</script>

<style>
</style>

<div id="banner">
  <h1>Explore a Universe of Books</h1>
</div>
