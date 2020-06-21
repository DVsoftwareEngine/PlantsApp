<script>
  function toPlant() {
    document.querySelector('#Cactus').scrollIntoView();
  }
</script>

<div class="PlantCard" on:click={toPlant}>
	<h3>Cactus</h3>
  <p>Yep, cactus</p>
</div>

<style>
	.PlantCard {
    background-color: white;
    width: 80%;
    border-radius: 30px;
    padding: 10px 
  }
</style>