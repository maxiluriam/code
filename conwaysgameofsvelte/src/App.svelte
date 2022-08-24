<script lang="ts">
  function createGrid() {
    let tempGrid: Array<number> = [];
    let grid: Array<Array<number>> = [];
    for (let i = 0; i < 120; i++) {
      for (let j = 0; j < 200; j++) {
        tempGrid.push(0);
      }
      grid.push(tempGrid);

      tempGrid = [];
    }

    return grid;
  }

  function rules(grid: Array<Array<number>>) {
    let count: number = 0;
    for (let i = 1; i < grid.length - 1; i++) {
      for (let j = 1; j < grid[0].length - 1; j++) {
        if (grid[i][j + 1] === 1) {
          count++;
        }
        if (grid[i][j - 1] === 1) {
          count++;
        }
        if (grid[i + 1][j] === 1) {
          count++;
        }
        if (grid[i - 1][j] === 1) {
          count++;
        }
        if (grid[i + 1][j + 1] === 1) {
          count++;
        }
        if (grid[i - 1][j - 1] === 1) {
          count++;
        }
        if (grid[i + 1][j - 1] === 1) {
          count++;
        }
        if (grid[i - 1][j + 1] === 1) {
          count++;
        }

        if (grid[i][j] === 1 && (count === 2 || count === 3)) {
          grid[i][j] = 1;
        } else if (grid[i][j] === 0 && count === 3) {
          grid[i][j] = 1;
        } else {
          grid[i][j] = 0;
        }

        count = 0;
      }
    }
    return grid;
  }

  let grid: Array<Array<number>> = createGrid();

  let count: number = 0;
</script>

<main>
  <button
    on:click={() => {
      const intervalId = setInterval(() => {
        grid = rules(grid);
      }, 30);
    }}
  />

  <div class="container">
    {#each grid as grid1, i}
      {#each grid1 as grid2, j}
        {#if grid[i][j] === 0}
          <div
            style=" grid-row:{i + 1}; grid-column:{j +
              1}; background-color: black;"
            on:click={() => {
              grid[i][j] = 1;
            }}
          />
        {:else if grid[i][j] === 1}
          <div
            style=" grid-row:{i + 1}; grid-column:{j +
              1}; background-color: green;"
          />
        {/if}
      {/each}
    {/each}
  </div>
</main>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(200, 1fr);
    grid-template-rows: repeat(120, 1fr);

    height: 100vh; /* For 100% screen height */
    width: 100vw; /* For 100% screen width */
  }
  main {
    height: 100vh; /* For 100% screen height */
    width: 100vw; /* For 100% screen width */

    text-align: center;

    max-width: 240px;
    margin: 0 auto;
  }

  button {
    background-color: black;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
