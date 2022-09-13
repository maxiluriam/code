<script lang="ts">


function createGrid(floor: any,x:number,y:number) {
    let tempGrid: Array<any> = [];
    let grid: Array<Array<any>> = [];
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        let e = floor;
        tempGrid.push(e);
      }
      grid.push(tempGrid);

      tempGrid = [];
    }

    return grid;
  }




  let renderGrid = createGrid(0,76,64)
  let logicGrid = createGrid(0,19,16)






  console.log(renderGrid)

  console.log(logicGrid)

</script>

<main>
	<div class="container">
		{#each renderGrid as x, i}
		  {#each x as _, j}
			
			<div style="background-color: black;"></div>

		  {/each}
		{/each}
	  </div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.container {
    margin: auto;
    margin-top: 100px;
    display: grid;
    grid-template-rows: repeat(76, 1fr);
    grid-template-columns: repeat(64, 1fr);

    height: 500px; /* For 100% screen height */
    width: 500px /* For 100% screen width */
  }

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>