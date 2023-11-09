<!-- Home page component showcasing featured books and upcoming titles -->

<script>
  import { books } from "$lib/store.js";
</script>

<link rel="stylesheet" href="css/home.css" />

<!-- Main content wrapper -->
<div class="content">
  <div class="wrapper">
    <!-- Banner section with library title -->
    <div class="container">
      <div class="banner">
        <h1>The Void Libary</h1>
      </div>

      <!-- Section displaying the top three books of the month -->
      <div class="top-three">
        <h2>Top Three of the Month</h2>
        <div class="books-grid">
          {#each $books.slice(0, 3) as book}
            <div class="book">
              <!-- Book details including image, title, author, and description -->
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Narrator: {book.narrator}</p>
              <p>Description: {book.description}</p>
            </div>
          {/each}
        </div>
      </div>

      <!-- Upcoming books section with a scrolling text feature -->
      <h2>Books Coming Soon</h2>
      <div class="scrolling-section">
        <div class="books-flex">
          <p>
            То Со мы То ﻿Кто от. Там тих где щит Мой бег. . Мню нее мои кто бою
            сам сей. Тиранам разврат Затихла плечьми буйство струйка. Дверь
            Твоем юдоли. Виновником неразлучен страшиться невинность милосердье
            сладчайший. Век под вне Оно Нет сия тук. Все вас совоздыхая
            устремится ком мню возблеснув разверзают лик мой сопрягаешь.
            Неправды но Ту светлеет Неправых Ни ум смотреть.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
