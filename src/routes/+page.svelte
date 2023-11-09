<!-- Welcome page component: Displays a welcome message and background images fetched from an API -->

<script>

  function navigateToHome() {
    window.location.href = "/home";
  }
</script>

<link rel="stylesheet" href="css/welcome.css" />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- Interactable galaxy image that navigates to home page on click -->
<div class="galaxy" on:click={navigateToHome}>
  <h1>Welcome to the Library</h1>
</div>
