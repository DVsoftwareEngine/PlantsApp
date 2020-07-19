<script>
  let toTop = () => {
    window.scrollTo(0,0);
  }

  export let plantName;
  export let nickname

  let setDateOfWatering = () => {

    console.log("Water")
    
  }

  let setDateOfFertilizetion = () => {

    console.log("Fertilizer")
    
  }

  let setDateOfPotting = () => {

    console.log("Shovel")
    
  }

</script>

<div class="Plant" id={plantName}>
  <div class="topButton" on:click={toTop}>
    <span class="arrow arrow-top-wide"></span>
  </div>
  <img class="PlantImage" src="images/{plantName}Image.jpg" alt="{plantName}"/>
  <div class="PlantAbout">
    <h1>{nickname}</h1>
    <div class="PlantAbout-buttons">
      <input type="image" src="images/Water.png" alt="Water" on:click={setDateOfWatering}/>
      <input type="image" src="images/Fertilizer.png" alt="Fertilizer" on:click={setDateOfFertilizetion}/>
      <input type="image" src="images/Shovel.png" alt="Shovel" on:click={setDateOfPotting}/>
    </div>
    <hr>
  </div>
</div>

<style>
	.Plant {
    height: 100vh;
  }

  .PlantImage {
    object-fit: cover;
    width: 100vw;
    height: 50%;

  }

  .topButton {
    text-align: center;
    padding-top: 15px;
  }


  .arrow {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-top: 2px solid #000;
    border-right: 2px solid #000;
    transform: rotate(-45deg) skew(15deg, 15deg);
  }

  .PlantAbout {
    padding: 15px;
  }

  .PlantAbout h1 {
    margin-top: 0;
  }

  .PlantAbout-buttons {
    display: flex;
    justify-content: space-around;
  }

  .PlantAbout-buttons input {
    border: 0;
    width: 100px;
    height: 100px;
  }


</style>