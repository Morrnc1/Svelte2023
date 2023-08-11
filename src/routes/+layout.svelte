<script>
    import Header from '$lib/Header.svelte'
    import Footer from '$lib/Footer.svelte'
    import Nav from '$lib/Nav.svelte'
</script>

<Nav/>
<Header/>


    <link rel="stylesheet" href="css/main.css" />


<div class="content">
    <div class="BG-FW">background img</div>
    <slot/>
</div>

<Footer />