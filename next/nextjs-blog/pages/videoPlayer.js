import { useState } from "react";

const VideoPlayer = (prop) => {
  const [currentVideo, setCurrentVideo] = useState(prop.prop.videoList[0]);
  const [i, setI] = useState(0);
  const limit = prop.prop.videoList.length - 1;

  let array = prop.prop.videoList;

  function checkNumber(i, limit) {
    if (i > limit) {
      setI(0);
    } else if (i < 0) {
      setI(limit);
    } else {
      setI(i);
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          console.log(i, limit);
          setI(i--);
          console.log(i, limit);
          checkNumber(i, limit);
          console.log(i, limit);
          setCurrentVideo(array[i]);
        }}
      ></button>

      <iframe
        width="560"
        height="315"
        src={currentVideo}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <button
        onClick={() => {
          console.log(i, limit);
          setI(i++);
          console.log(i, limit);
          checkNumber(i, limit);
          console.log(i, limit);
          setCurrentVideo(array[i]);
        }}
      ></button>
    </div>
  );
};

export default VideoPlayer;
