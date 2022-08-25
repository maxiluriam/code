<script lang="ts">
  function createGrid() {
    let tempGrid: Array<number> = [];
    let grid: Array<Array<number>> = [];
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 120; j++) {
        tempGrid.push(0);
      }
      grid.push(tempGrid);

      tempGrid = [];
    }

    return grid;
  }

  let grid: Array<Array<number>> = createGrid();

  class Building {
    input: any;
    output: any;
    inventory: any;

    constructor(input: any, output: any, inventory: any) {
      this.input = input;
      this.output = output;
      this.inventory = inventory;
    }

    produce() {
      if (
        this.input.recource === this.inventory.recource &&
        this.input.amount === this.inventory.amount
      ) {
        this.inventory.recource = this.output.recource;
        this.inventory.amount = this.output.amount;
      }
    }

    add() {
      if (
        this.inventory.amount !== this.input.amount &&
        this.inventory.recource !== this.output.recource
      ) {
        this.inventory.amount = this.inventory.amount + 1;
      }
    }
  }

  const furnace = new Building(
    { recource: "stone", amount: 5 },
    { recource: "brick", amount: 2 },
    { recource: "stone", amount: 2 }
  );

  furnace.add();
  furnace.add();
  furnace.add();
  furnace.produce();

  console.log(furnace);
</script>

<main>
  <div class="container">
    {#each Array(50) as _, i}
      {#each Array(120) as _, j}
        {#if grid[i][j] === 0}
          <div
            style=" grid-row:{i + 1}/{i + 1}; grid-column:{j + 1}/{j +
              1} ; background-color: green;"
          />
        {/if}
      {/each}
    {/each}
  </div>
</main>

<style>
  .container {
    margin: auto;
    margin-top: 40px;
    display: grid;
    grid-template-rows: repeat(50, 1fr);
    grid-template-columns: repeat(120, 1fr);

    height: 90vh; /* For 100% screen height */
    width: 90vw; /* For 100% screen width */
  }
  main {
    height: 94vh; /* For 100% screen height */
    width: 99vw; /* For 100% screen width */

    text-align: center;

    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
