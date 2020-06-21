<script>
  import router, { curRoute } from './router.js';
  import RouterLink from './RouterLink.svelte';
  import { onMount } from 'svelte';
  import Plants from "./Home/components/Plants.svelte";

  onMount(() => {  curRoute.set(window.location.pathname);  
  if (!history.state) {
    window.history.replaceState({path: window.location.pathname}, '',   window.location.href)  
  }})
  function handlerBackNavigation(event){  
    curRoute.set(event.state.path)
  }
  document.body.style.overflow = "hidden"

</script>

<style>
  :root {

  }

  .app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: rgb(243, 243, 243);
  }

  #pageContent {
    height: 85%;
    overflow: scroll;
  }

  .navbar {
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }

  .header{
    height: 5%;
    text-align: center;
  }
  .header>h1{
    margin: auto;
  }

  :global(body) {
		padding: 0;
	}

  :global(html) {
		scroll-behavior: smooth;
	}

</style>

<svelte:window on:popstate={handlerBackNavigation} />

<div class="app">
  <header class="header"><h1>PlantsApp</h1></header>

  <div id="pageContent"><!-- Page component updates here --><svelte:component this={router[$curRoute]} /></div>

  <nav class="navbar">
    <RouterLink page={{path: '/', name: 'Home'}} />

    <RouterLink page={{path: '/calendar', name: 'Calendar'}} />

    <RouterLink page={{path: '/shop', name: 'Shop'}} />

    <RouterLink page={{path: '/profile', name: 'Profle'}} />
  </nav>

</div>

<Plants/>