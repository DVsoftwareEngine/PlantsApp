<script>
  function toTop() {
    window.scrollTo(0,0);
  }

  export let plantName;
</script>

<div class="Plant" id={plantName} on:click={toTop}>
	<a>UP</a>
  <h1>{plantName}</h1>
</div>

<style>
	.Plant {
    background-color:rgb(148, 179, 86);
    height: var(--pageHeight);
  }
</style>