<script>
    import { selectedGenre } from "$lib/store.js";
    let selected;
    $selectedGenre = "All"; 
  
    function changeGenre(genre) {
      selectedGenre.set(genre);
    }
  </script>
  
  <div class="container">
    <div class="heading">
      <h2>Welcome to the Library!</h2>
    </div>
  
    <div class="genre-section">
      <button on:click={() => changeGenre('All')} class="genre-btn">All</button>
      <button on:click={() => changeGenre('Fantasy')} class="genre-btn">Fantasy</button>
      <button on:click={() => changeGenre('Science Fiction')} class="genre-btn">Science Fiction</button>
    </div>
  
    <div class="book-of-the-month">
      <h3>Book of the Month</h3>
    </div>
  </div>
  