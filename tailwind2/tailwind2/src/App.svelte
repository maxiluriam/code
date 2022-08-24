<script>
  const images = [
    { image: "thumb-1920-488092.webp", text: "hello world" },
    { image: "th.webp", text: "hello world" },
    { image: "th (1).webp", text: "hello world" },
  ];

  let i = 0;
</script>

<main class="min-h-screen grid bg-gray-400 grid-rows-6 grid-cols-12 gap-4">
  <div
    class="  bg-white row-span-1 col-span-12 h-4/5 border-b-8 border-gray-900"
  />

  <div class="bg-white  h-2/3  flex text-xl">
    <p />
    <button
      class=" m-auto h-full w-full font-medium"
      on:click={() => {
        i = Math.floor(Math.random() * 20);
      }}>{i}</button
    >
  </div>

  <div
    class="  bg-black row-start-4  row-end-6 col-start-1  col-end-13  h-4/6 border-t-8 border-b-8 border-gray-900  flex place-content-around"
  >
    {#each images as image}
      <img
        src="images/{image.image}"
        alt=""
        class="max-h-96 hover:opacity-50 "
      />
    {/each}
  </div>
</main>

<style>
</style>
