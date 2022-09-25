<script lang="ts">
  import addSong from "./addsong";
  import checkNumber from "./checknumber";

  Storage.prototype.setObj = function (key: string, obj: any) {
    return this.setItem(key, JSON.stringify(obj));
  };
  Storage.prototype.getObj = function (key: string) {
    return JSON.parse(this.getItem(key));
  };

  let input = "";
  let videoList: string[] = localStorage.getObj("list") || [];
  let currentVideo: number = 0;

  function onSubmit(e) {
    videoList = addSong(input, videoList);
    input = "";
    console.log(videoList);

    localStorage.setObj("list", videoList);
  }

  function left(e) {
    currentVideo--;
    currentVideo = checkNumber(currentVideo, videoList.length - 1);
    console.log(currentVideo);
  }

  function moveVideoLeft(e) {
    let video: string = videoList[currentVideo - 1];
    videoList[currentVideo - 1] = videoList[currentVideo];
    videoList[currentVideo] = video;
  }

  function right(e) {
    currentVideo++;
    currentVideo = checkNumber(currentVideo, videoList.length - 1);
    console.log(currentVideo);
  }

  function moveVideoRight(e) {
    let video: string = videoList[currentVideo + 1];
    videoList[currentVideo + 1] = videoList[currentVideo];
    videoList[currentVideo] = video;
  }

  function remove(e) {
    videoList = videoList.splice(currentVideo - 1, 1);
    currentVideo = checkNumber(currentVideo, videoList.length - 1);

    localStorage.setObj("list", videoList);
  }
</script>

<main>
  <form on:submit|preventDefault={onSubmit}>
    <input bind:value={input} type="text" />
    <button class="submit" type="submit">submit</button>
  </form>
  <button on:click={moveVideoLeft} class="movebackward" type="click">
    MOVE VIDEO <p><i class="arrow left" /></p></button
  >
  <button on:click={left} type="click" class="back">
    <p><i class="arrow left" /></p>
  </button>
  <iframe
    src={videoList[currentVideo]}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
  <button on:click={right} type="click" class="forward">
    <p><i class="arrow right" /></p>
  </button>
  <button on:click={moveVideoRight} class="moveforward" type="click">
    MOVE VIDEO <p><i class="arrow right" /></p></button
  >

  <button class="delete" on:click={remove}> DELETE </button>
</main>

<style>
  main {
    text-align: center;
    padding: 0px;
    max-width: 240px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(16, 6.25%);

    grid-template-rows: repeat(16, 6.25%);

    height: 100%;
    width: 100%;
  }

  form {
    margin: auto;

    grid-column: 6 / 12;
    grid-row: 3 / 5;
  }
  iframe {
    height: auto;
    width: 100%;
    grid-column: 6 / 12;
    grid-row: 5 / 12;
    aspect-ratio: 16/9;
  }

  button {
    width: 40px;
    height: 100px;
  }

  .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }

  .right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
  .submit {
    width: auto;
    height: auto;
  }
  .delete {
    width: 100px;
    height: 40px;

    margin: auto;

    grid-column: 8 / 10;
    grid-row: 12 / 12;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
