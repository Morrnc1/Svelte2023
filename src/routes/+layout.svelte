<!-- Layout component: Defines the structure shared by all pages, including navigation and footer -->

<script>
    import Footer from '$lib/Footer.svelte';
    import Nav from '$lib/Nav.svelte';
</script>
<link rel="stylesheet" href="css/main.css" />

<Nav />

<div class="content">
    <slot/>
</div>

<Footer />