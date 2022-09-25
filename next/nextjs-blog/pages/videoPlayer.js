import { useState } from "react";

const VideoPlayer = (prop) => {
  const [i, setI] = useState(0);
  console.log(prop)
  const limit = prop.prop.length - 1;

  let array = prop.prop;

  function checkNumber(i, limit) {
    if (i > limit) {
      return 0;
    } else if (i < 0) {
      return limit;
    } else {
      return i;
    }
  }
 
  return (
    <div>
      <button
        onClick={() => {
          setI(checkNumber(i - 1, limit));
        }}
      >
        i
      </button>

      <iframe
        width="560"
        height="315"
        src={array[i]}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <button
        onClick={() => {
          setI(checkNumber(i + 1, limit));
        }}
      >
        e
      </button>
    </div>
  );
};

export default VideoPlayer;
