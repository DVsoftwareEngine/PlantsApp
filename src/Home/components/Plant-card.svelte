<script>
  function toPlant() {
    document.querySelector('#'+plantName).scrollIntoView();
  }

  export let plantName;
</script>

<div class="PlantCard" on:click={toPlant}>
	<h3>{plantName}</h3>
  <p>Yep, {plantName}</p>
</div>

<style>
	.PlantCard {
    background-color: white;
    width: 80%;
    border-radius: 30px;
    padding: 10px;
    margin-bottom: 2.5%;
  }
</style>