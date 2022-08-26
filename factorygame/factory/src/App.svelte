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
    recipes: Array<any>;
    inputInventory: Array<any>;
    outputInventory: Array<any>;

    constructor(
      recipes: Array<any>,
      inputInventory: Array<any>,
      outputInventory: Array<any>
    ) {
      this.recipes = recipes;
      this.inputInventory = inputInventory;
      this.outputInventory = outputInventory;
    }

    produce() {
      for (let i = 0; i < this.recipes.length; i++) {
        let index: number = 0;
        for (let j = 0; j < Object.keys(this.recipes[i].input).length; j++) {
          console.log(
            this.recipes[i].input[j].recource == this.inputInventory[j].recource
          );
          console.log(
            this.recipes[i].input[j].recource,
            this.inputInventory[j].recource
          );

          if (
            this.recipes[i].input[j].recource ===
              this.inputInventory[j].recource &&
            this.recipes[i].input[j].amount <= this.inputInventory[j].amount
          ) {
            index++;
            // break;
            //  console.log(index);
          }
        }
        //  console.log(index === 2);
        if (index === Object.keys(this.recipes[i].input).length) {
          if (this.outputInventory[0].recource === "") {
            this.outputInventory[0] = this.recipes[i].output;

            for (
              let j = 0;
              j < Object.keys(this.recipes[i].input).length;
              j++
            ) {
              this.inputInventory[j].amount =
                this.inputInventory[j].amount - this.recipes[i].input[j].amount;
              if (this.inputInventory[j].amount === 0) {
                this.inputInventory[j].recource = "";
              }
            }
          } else if (
            this.outputInventory[0].recource !== this.recipes[i].output
          ) {
          } else if (
            this.outputInventory[0].recource === this.recipes[i].output
          ) {
            this.outputInventory[0].amount =
              this.outputInventory[0].amount + this.recipes[i].output[0].amount;

            for (
              let j = 0;
              j < Object.keys(this.recipes[i].input).length;
              j++
            ) {
              this.inputInventory[j].amount =
                this.inputInventory[j].amount - this.recipes[j].input.amount;
              if (this.inputInventory[j].amount === 0) {
                this.inputInventory[j].recource = "";
              }
            }
          }
        }
      }
    }

    add(recource: string) {
      let bolean = false;
      for (let i = 0; i < this.inputInventory.length; i++) {
        for (let j = 0; j < Object.keys(this.recipes[i].input).length; j++) {
          if (
            this.inputInventory[i].amount !== this.recipes[i].input.amount &&
            this.inputInventory[i].recource === recource
          ) {
            bolean = true;
          }
        }
      }

      if (bolean === true) {
        this.inputInventory[0].amount = this.inputInventory[0].amount + 1;
      }
    }
  }

  const furnace = new Building(
    [
      {
        input: [
          { recource: "ironOre", amount: 5 },
          { recource: "coal", amount: 1 },
        ],
        output: [{ recource: "ironplate", amount: 4 }],
      },
      {
        input: [
          { recource: "stone", amount: 5 },
          { recource: "coal", amount: 2 },
        ],
        output: [{ recource: "brick", amount: 1 }],
      },
    ],
    [
      { recource: "stone", amount: 10 },
      { recource: "coal", amount: 10 },
    ],
    [{ recource: "", amount: 0 }]
  );

  furnace.add("iron");
  furnace.add("stone");
  furnace.add("stone");
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
