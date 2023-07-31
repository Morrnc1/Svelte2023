<!-- AudiobookDetail Page -->
<script>
  export let audiobook;
</script>

<style>
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
  }

  h2 {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    margin-bottom: 10px;
  }

  .go-back {
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
  <h1>{audiobook.title}</h1>
</header>

<main>
  <h2>About the Audiobook</h2>
  <p>Author: {audiobook.author}</p>
  <p>Description: {audiobook.description}</p>
  <p>Publishing Date: {audiobook.publishingDate}</p>
  <p>Narrator: {audiobook.narrator}</p>

  <!-- more detailed here please me  -->

  <a href="javascript:history.back()" class="go-back">Go Back</a>
</main>
