<script>
  import AICard from "./components/AI-card.svelte";
  import PlantCard from "./components/Plant-card.svelte";
</script>

<div class="Home">
	<AICard/>
  <PlantCard/>
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