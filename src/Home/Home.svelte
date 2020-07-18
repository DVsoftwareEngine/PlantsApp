<script>
  import AICard from "./components/AI-card.svelte";
  import PlantCard from "./components/Plant-card.svelte";
  import NewPlantCard from "./components/NewPlant-card.svelte";
  import PlantsStore from "../Store/PlantsStore"

  let PlantsArr = [];

  PlantsStore.subscribe(updatedData => {
		PlantsArr = updatedData;
  });

</script>

<div class="Home">
  <AICard/>
  { #each PlantsArr as plant }
    <PlantCard plantName="{plant.plantName}"/>
  { /each }
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