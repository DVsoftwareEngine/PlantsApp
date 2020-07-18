<script>
  import Plant from "./Plant.svelte";
  import PlantsStore from "../../Store/PlantsStore"

  let PlantsArr = [];

  PlantsStore.subscribe(updatedData => {
		PlantsArr = updatedData;
  });
</script>

<div class="Plants">

  { #each PlantsArr as plant }
    <Plant plantName={plant.plantName}/>
  { /each }

</div>

<style>
</style>