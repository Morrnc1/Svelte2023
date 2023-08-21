<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
    import Nav from '$lib/Nav.svelte';
</script>
<link rel="stylesheet" href="css/main.css" />

<Nav />

<div class="content">
    <slot/>
</div>

<Footer />