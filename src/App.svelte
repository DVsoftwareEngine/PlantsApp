<script>
  import router, { curRoute } from './router.js';
  import RouterLink from './RouterLink.svelte';
  import { onMount } from 'svelte';
  import Plants from "./Home/components/Plants.svelte";

  import smoothscroll from 'smoothscroll-polyfill';

  onMount(() => {  curRoute.set(window.location.pathname);  
  if (!history.state) {
    window.history.replaceState({path: window.location.pathname}, '',   window.location.href)  
  }})
  function handlerBackNavigation(event){  
    curRoute.set(event.state.path)
  }
  document.body.style.overflow = "hidden"

  smoothscroll.polyfill();

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

</script>

<style>

  .app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
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