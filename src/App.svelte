<script>
import router, { curRoute } from './router.js';
import RouterLink from './RouterLink.svelte';
import { onMount } from 'svelte';

onMount(() => {  curRoute.set(window.location.pathname);  
if (!history.state) {
  window.history.replaceState({path: window.location.pathname}, '',   window.location.href)  
}})
function handlerBackNavigation(event){  
  curRoute.set(event.state.path)
}
</script>

<style>

.app {
  display: flex;
  flex-direction: column;
}

</style>

<svelte:window on:popstate={handlerBackNavigation} />

<div class="app">
  <div id="pageContent"><!-- Page component updates here --><svelte:component this={router[$curRoute]} /></div>

  <RouterLink page={{path: '/home', name: 'Home'}} />

  <RouterLink page={{path: '/profile', name: 'Profle'}} />
</div>