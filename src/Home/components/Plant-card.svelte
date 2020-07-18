<script>
import Plant from "./Plant.svelte";


  export let plantName;

  function toPlant() {
    document.querySelector('#'+plantName).scrollIntoView();
  }
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