<script>
  function toTop() {
    window.scrollTo(0,0);
  }

  export let plantName;
</script>

<div class="Plant" id={plantName}>
  <div class="topButton" on:click={toTop}>
    <span class="arrow arrow-top-wide"></span>
  </div>
  <!-- <h1>{plantName}</h1> -->
  <img class="PlantImage" src="images/cactus.jpg" alt=""/>
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
    padding-top: 10px;
  }


  .arrow {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-top: 2px solid #000;
    border-right: 2px solid #000;
    transform: rotate(-45deg) skew(15deg, 15deg);
  }
</style>