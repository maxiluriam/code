<script lang="ts">
  function createGrid(floor: any) {
    let tempGrid: Array<any> = [];
    let grid: Array<Array<any>> = [];
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 120; j++) {
        let e = floor;
        tempGrid.push(e);
      }
      grid.push(tempGrid);

      tempGrid = [];
    }

    return grid;
  }

  function createBuildingGrid() {
    let tempGrid: Array<any> = [];
    let grid: Array<Array<any>> = [];
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 120; j++) {
        tempGrid.push({
          building: "none",
          inputInventory: [],
          outputInventory: [],
          recipes: [],
        });
      }
      grid.push(tempGrid);

      tempGrid = [];
    }

    return grid;
  }

  let buildingGrid: Array<Array<any>> = createBuildingGrid();
  let groundGrid: Array<Array<string>> = createGrid("normal");

  console.log(groundGrid, buildingGrid);

  //class Building {
  //  recipes: Array<any>;
  //  inputInventory: Array<any>;
  //  outputInventory: Array<any>;
  //
  //  constructor(
  //    recipes: Array<any>,
  //    inputInventory: Array<any>,
  //    outputInventory: Array<any>
  //  ) {
  //    this.recipes = recipes;
  //    this.inputInventory = inputInventory;
  //    this.outputInventory = outputInventory;
  //  }
  //
  //  produce() {
  //    for (let i = 0; i < this.recipes.length; i++) {
  //      let index: number = 0;
  //      for (let j = 0; j < Object.keys(this.recipes[i].input).length; j++) {
  //        if (
  //          this.recipes[i].input[j].recource ===
  //            this.inputInventory[j].recource &&
  //          this.recipes[i].input[j].amount <= this.inputInventory[j].amount
  //        ) {
  //          index++;
  //        }
  //      }
  //
  //      if (index === Object.keys(this.recipes[i].input).length) {
  //        for (let j = 0; j < this.outputInventory.length; j++) {
  //          if (this.outputInventory[j].recource === "") {
  //            let e = this.recipes[i].output[0].recource;
  //            let r = this.recipes[i].output[0].amount;
  //            this.outputInventory[j].recource = e;
  //            this.outputInventory[j].amount = r;
  //          } else if (
  //            this.outputInventory[0].recource !== this.recipes[i].output
  //          ) {
  //            this.outputInventory[0].amount =
  //              this.outputInventory[0].amount +
  //              this.recipes[i].output[0].amount;
  //          }
  //        }
  //        for (let j = 0; j < Object.keys(this.recipes[i].input).length; j++) {
  //          this.inputInventory[j].amount =
  //            this.inputInventory[j].amount - this.recipes[i].input[j].amount;
  //          if (this.inputInventory[j].amount === 0) {
  //            this.inputInventory[j].recource = "";
  //          }
  //        }
  //      }
  //    }
  //  }
  //
  //  add(recource: string) {
  //    for (let i = 0; i < this.inputInventory.length; i++) {
  //      let bolean = false;
  //      for (let j = 0; j < Object.keys(this.recipes[i].input).length; j++) {
  //        if (
  //          (this.inputInventory[i].amount !== this.recipes[i].input.amount &&
  //            this.inputInventory[i].recource === recource) ||
  //          this.inputInventory[i].recource === ""
  //        ) {
  //          bolean = true;
  //        }
  //      }
  //      if (bolean === true) {
  //        this.inputInventory[i].amount = this.inputInventory[i].amount + 1;
  //        this.inputInventory[i].recource = recource;
  //      }
  //    }
  //  }
  //
  //  remove() {
  //    //console.log(this.outputInventory[0].recource);
  //    let bolean = false;
  //    for (let i = 0; i < this.outputInventory.length; i++) {
  //      if (this.outputInventory[0].amount >= 1) {
  //        bolean = true;
  //      }
  //      if (bolean === true) {
  //        this.outputInventory[0].amount = this.outputInventory[0].amount - 1;
  //
  //        if (this.outputInventory[0].amount === 0) {
  //          this.outputInventory[0].recource = "";
  //        }
  //      }
  //    }
  //  }
  //}
  //
  //class extractors {
  //  groundType: string;
  //  outputInventory: any;
  //
  //  constructor(groundType: string, outputInventory: Array<any>) {
  //    this.groundType = groundType;
  //    this.outputInventory = outputInventory;
  //  }
  //
  //  produce() {
  //    if (this.groundType !== "normal") {
  //      if (this.outputInventory.recource === "") {
  //        console.log("ww");
  //        let e = this.groundType;
  //        this.outputInventory.recource = e;
  //        this.outputInventory.amount = 1;
  //      } else if (this.outputInventory.recource === this.groundType) {
  //        this.outputInventory.amount = this.outputInventory.amount + 1;
  //      }
  //    }
  //  }
  //
  //  remove() {
  //    let cache = this.outputInventory.recource;
  //
  //    if (this.outputInventory.amount >= 1) {
  //      this.outputInventory.amount = this.outputInventory.amount - 1;
  //
  //      if (this.outputInventory.amount === 0) {
  //        this.outputInventory.recource = "";
  //      }
  //      return cache;
  //    }
  //  }
  //}

  const recipes = {
    furnace: [
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
    constructor: [
      {
        input: [
          { recource: "ironOre", amount: 5 },
          { recource: "coal", amount: 1 },
        ],
        output: [{ recource: "lee", amount: 4 }],
      },
      {
        input: [
          { recource: "stone", amount: 5 },
          { recource: "coal", amount: 2 },
        ],
        output: [{ recource: "ree", amount: 1 }],
      },
    ],
  };

  // const furnace = new Building(
  //   furnaceResepes,
  //   [
  //     { recource: "stone", amount: 10 },
  //     { recource: "coal", amount: 10 },
  //   ],
  //   [{ recource: "", amount: 0 }]
  // );
  //
  // const extractor = new extractors("stone", { recource: "", amount: 0 });
  //
  // extractor.produce();
  // extractor.produce();
  // extractor.produce();
  //
  // extractor.remove();
  // extractor.remove();
  // extractor.remove();
  //
  // console.log(extractor);
  //
  // //furnace.add("iron");
  // furnace.add("stone");
  // furnace.add("stone");
  // furnace.add("stone");
  // furnace.add("stone");
  // furnace.add("stone");
  // furnace.add("stone");
  // furnace.add("coal");
  // furnace.add("coal");

  // furnace.produce();
  // furnace.produce();
  //
  // furnace.remove();
  // furnace.remove();
  // furnace.remove();
  //
  // furnace.produce();
  //
  // console.log(furnace);
  //
  let extractorProduce = function (buildingGrid, groundGrid, i, j) {
    if (groundGrid[i][j] !== "normal") {
      //  console.log(buildingGrid[i][j].outputInventory[0].recource);
      if (buildingGrid[i][j].outputInventory[0].recource === "") {
        let e = groundGrid[i][j];
        buildingGrid[i][j].outputInventory[0].recource = e;
        buildingGrid[i][j].outputInventory[0].amount = 1;
      } else if (
        buildingGrid[i][j].outputInventory[0].recource === groundGrid[i][j] &&
        buildingGrid[i][j].outputInventory[0].amount <= 99
      ) {
        buildingGrid[i][j].outputInventory[0].amount =
          buildingGrid[i][j].outputInventory[0].amount + 1;
      }
    }

    return buildingGrid;
  };

  let constructorProduce = function (buildingGrid, groundGrid, i, j) {
    for (let k = 0; k < buildingGrid[i][j].recipes.length; k++) {
      let index: number = 0;
      for (
        let l = 0;
        l < Object.keys(buildingGrid[i][j].recipes[k].input).length;
        l++
      ) {
        //   console.log(buildingGrid[i][j].inputInventory);
        if (
          buildingGrid[i][j].recipes[k].input[l].recource ===
            buildingGrid[i][j].inputInventory[l].recource &&
          buildingGrid[i][j].recipes[k].input[l].amount <=
            buildingGrid[i][j].inputInventory[l].amount
        ) {
          index++;
        }
      }

      if (index === Object.keys(buildingGrid[i][j].recipes[i].input).length) {
        for (let l = 0; l < buildingGrid[i][j].outputInventory.length; l++) {
          if (buildingGrid[i][j].outputInventory[l].recource === "") {
            let e = buildingGrid[i][j].recipes[k].output[0].recource;
            let r = buildingGrid[i][j].recipes[k].output[0].amount;
            buildingGrid[i][j].outputInventory[l].recource = e;
            buildingGrid[i][j].outputInventory[l].amount = r;
          } else if (
            buildingGrid[i][j].outputInventory[0].recource !==
            buildingGrid[i][j].recipes[l].output
          ) {
            buildingGrid[i][j].outputInventory[0].amount =
              buildingGrid[i][j].outputInventory[0].amount +
              buildingGrid[i][j].recipes[k].output[0].amount;
          }
        }
        for (
          let l = 0;
          l < Object.keys(buildingGrid[i][j].recipes[i].input).length;
          l++
        ) {
          buildingGrid[i][j].inputInventory[l].amount =
            buildingGrid[i][j].inputInventory[l].amount -
            buildingGrid[i][j].recipes[k].input[l].amount;
          if (buildingGrid[i][j].inputInventory[l].amount === 0) {
            buildingGrid[i][j].inputInventory[l].recource = "";
          }
        }
      }
    }

    return buildingGrid;
  };

  const intervalId = setInterval(() => {
    for (let i = 0; i < groundGrid.length; i++) {
      for (let j = 0; j < groundGrid[i].length; j++) {
        if (buildingGrid[i][j].building === "extractor") {
          buildingGrid = extractorProduce(buildingGrid, groundGrid, i, j);

          // console.log(buildingGrid[i][j]);
        }
        if (buildingGrid[i][j].building === "constructor") {
          buildingGrid = constructorProduce(buildingGrid, groundGrid, i, j);

          //  console.log(buildingGrid[i][j]);
        }

        if (buildingGrid[i][j].building === "furnace") {
          buildingGrid = constructorProduce(buildingGrid, groundGrid, i, j);

          //  console.log(buildingGrid[i][j]);
        }
      }
    }
  }, 30);
  let buildingButtons = [
    {
      building: "extractor",
      recipes: [],
      inputInventory: [{}, {}],
      outputInventory: [{ recource: "", amount: 0 }],
    },
    //---------------------
    {
      building: "furnace",
      recipes: [
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
      inputInventory: [
        { recource: "", amount: 0 },
        { recource: "coal", amount: 0 },
      ],
      outputInventory: [{ recource: "", amount: 0 }],
    },
    //---------------------
    {
      building: "constructor",
      recipes: [
        {
          input: [
            { recource: "ironOre", amount: 5 },
            { recource: "coal", amount: 1 },
          ],
          output: [{ recource: "lee", amount: 4 }],
        },
        {
          input: [
            { recource: "stone", amount: 5 },
            { recource: "coal", amount: 2 },
          ],
          output: [{ recource: "ree", amount: 1 }],
        },
      ],
      inputInventory: [
        ,
        { recource: "", amount: 0 },
        { recource: "coal", amount: 0 },
      ],
      outputInventory: [{ recource: "", amount: 0 }],
    },
    //---------------------
  ];
  let buildingCache = "none";
  let recipeCache = [];
  let inventoryCache = [[], []];
  // buildingGrid[0][0].building = "extractor";

  // console.log(buildingGrid[0][0], buildingGrid[0][1]);

  groundGrid[0][0] = "stone";
</script>

<main>
  <form action="">
    {#each buildingButtons as building, i}
      <input
        type="radio"
        name="e"
        id={building.building}
        on:click={() => {
          buildingCache = building.building;
          recipeCache = building.recipes;
          inventoryCache[0] = building.inputInventory;
          inventoryCache[1] = building.outputInventory;
        }}
      />
    {/each}
  </form>

  <div class="container">
    {#each Array(50) as _, i}
      {#each Array(120) as _, j}
        <div
          style=" grid-row:{i + 1}/{i + 1}; grid-column:{j + 1}/{j +
            1} ; background-color: black;"
          on:click={() => {
            console.log(buildingGrid[i][j]);

            buildingGrid[i][j].building = buildingCache;
            buildingGrid[i][j].recipes = recipeCache;
            buildingGrid[i][j].inputInventory = inventoryCache[0];
            buildingGrid[i][j].outputInventory = inventoryCache[1];
            console.log(buildingGrid[i][j]);
          }}
        />
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
