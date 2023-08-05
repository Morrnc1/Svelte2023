<script>
    import Header from '$lib/Header.svelte'
    import Footer from '$lib/Footer.svelte'
    import Nav from '$lib/Nav.svelte'
</script>
<Nav/>
<Header/>


<svelte:head><link rel="stylesheet" href="static/css/main.css" /></svelte:head>
<slot/>

<Footer />