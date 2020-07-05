<script>

  import { writable } from "svelte/store";

  export let plants = writable( [
    {"plantName": "Cactus", "img": "../pic" },
    {"plantName": "Flower", "img": "../pic" }
  ] );

</script>