<script>
  export let plantName;

  function toPlant() {
    document.querySelector('#'+plantName).scrollIntoView();
  }
</script>

<div class="PlantCard" on:click={toPlant}>
  <div class="PlantCard-name">
    <h3>{plantName}</h3>
    <p>Yep, {plantName}</p>
  </div>
  <div class="PlantCard-logo">
    <img src="images/{plantName}Logo.png" alt="{plantName}">
  </div>
</div>

<style>
	.PlantCard {
    background-color: white;
    width: 80%;
    border-radius: 30px;
    padding: 10px;
    margin-bottom: 2.5%;
    display: flex;
  }

  .PlantCard-name {
    flex-grow: 10;
  }

  .PlantCard-logo {
    width: 100px;
  }

  .PlantCard-logo img {
    height: 100px;
  }

</style>