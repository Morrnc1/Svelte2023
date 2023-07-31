<!-- App pag -->
<script>
    import { Router, Link, Route } from 'svelte-routing';
    import Audiobook from './Audiobook.svelte';
    import AudiobookDetail from './AudiobookDetail.svelte';
  
    const audiobooks = [
      {
        title: 'Audiobook Title 1',
        author: 'Author Name',
        description: 'Description of Audiobook 1 goes here...',
        imagePath: 'path-to-your-image-1.jpg',
        publishingDate: '2023-08-01',
        narrator: 'Narrator Name'
      },
      {
        title: 'Audiobook Title 2',
        author: 'Author Name',
        description: 'Description of Audiobook 2 goes here...',
        imagePath: 'path-to-your-image-2.jpg',
        publishingDate: '2023-08-15',
        narrator: 'Another Narrator'
      },
      // Ree need to add more objectos
    ];
  
    let searchQuery = '';
  
    function handleSearch(event) {
      searchQuery = event.target.value.toLowerCase();
    }
  
    function filteredAudiobooks() {
      if (!searchQuery) {
        return audiobooks;
      }
  
      return audiobooks.filter(
        (audiobook) =>
          audiobook.title.toLowerCase().includes(searchQuery) ||
          audiobook.author.toLowerCase().includes(searchQuery)
      );
    }
  </script>
  
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f7f7f7;
    }
  
    header {
      background-color: #333;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
  
    h1 {
      margin: 0;
    }
  
    main {
      padding: 20px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 20px;
    }
  
    .search-container {
      margin-bottom: 20px;
    }
  
    .search-input {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 100%;
      box-sizing: border-box;
    }
  
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
  
  <header>
    <h1>Sci-Fi/LitRPG Audiobooks</h1>
  </header>
  
  <main>
    <div class="search-container">
      <input
        type="text"
        class="search-input"
        placeholder="Search by title or author..."
        bind:value={searchQuery}
        on:input={handleSearch}
      />
    </div>
  
    <Router>
      {#each filteredAudiobooks() as audiobook}
        <Audiobook
          title={audiobook.title}
          author={audiobook.author}
          description={audiobook.description}
          imagePath={audiobook.imagePath}
        />
      {/each}
      <Route path="audiobook-detail/:title" let:params>
        {#each filteredAudiobooks() as audiobook}
          {#if audiobook.title === params.title}
            <AudiobookDetail
              audiobook={audiobook}
            />
          {/if}
        {/each}
      </Route>
    </Router>
  </main>
  