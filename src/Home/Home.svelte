<script>
  import AICard from "./components/AI-card.svelte";
  import PlantCard from "./components/Plant-card.svelte";
  import NewPlantCard from "./components/NewPlant-card.svelte";
  import { plants } from "../../../State/State.svelte"

  const unsubscribe = plants.subscribe(value => {
		count_value = value;
  });
  
  onDestroy(unsubscribe);

</script>

<div class="Home">
  <AICard/>
  <PlantCard plantName="Cactus"/>
  <!-- { #each $plants as plant }
    <PlantCard plantName="{plant.plantName}"/>
  { /each } -->
  <NewPlantCard/>
</div>

<style>
	.Home {
		margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
	}

</style>