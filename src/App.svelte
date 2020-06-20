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
  //Убрали паддинг у body
  document.body.style.padding = 0;

  //Получаем высоту браузерного окна для дальнейшего присваивания ее высоте блоков
  let pageHeight = document.documentElement.clientHeight;
  //Получаем доступ к переменным css
  var root = document.querySelector(':root');
  //Присваеваем переменной --pageHeight значение высоты браузерного окна, все блоки главной страницы будут ее испотзовать
  root.style.setProperty('--pageHeight', pageHeight+"px");

</script>

<style>
  :root {
    --pageHeight: 80px;
  }

  .app {
    display: flex;
    flex-direction: column;
    background-color:blanchedalmond;
    height: var(--pageHeight);
  }

  #pageContent {
    height: 90%;
  }

  .navbar {
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-top: 1px solid black;
  }

</style>

<svelte:window on:popstate={handlerBackNavigation} />

<div class="app">
  <div id="pageContent"><!-- Page component updates here --><svelte:component this={router[$curRoute]} /></div>

  <nav class="navbar">
    <RouterLink page={{path: '/', name: 'Home'}} />

    <RouterLink page={{path: '/calendar', name: 'Calendar'}} />

    <RouterLink page={{path: '/shop', name: 'Shop'}} />

    <RouterLink page={{path: '/profile', name: 'Profle'}} />
  </nav>
</div>