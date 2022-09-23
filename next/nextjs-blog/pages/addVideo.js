import { useState } from "react";

const AddVideo = (prop) => {
  const [newVideo, setNewVideo] = useState("");

  const editTest = async (_id, name, newVideoList) => {
    const res = await fetch("/api/test/getserversideprops", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        _id: _id,
        name: `${name}`,
        videoList: newVideoList,
      }),
    });

    const data = await res.json();

    console.log(data);
    // return data;
  };

  const handleSubmit = function (e, prop) {
    e.preventDefault();
    const videoList = prop.prop.videoList;
    let temp = "";

    if (e.target[1].value.includes("https://youtu.be/") === true) {
      temp = e.target[1].value.replace(
        "https://youtu.be/",
        "https://www.youtube.com/embed/"
      );

      const cache = [...videoList, temp];

      console.log(prop.prop.videoList);

      editTest(prop.prop._id, `${prop.prop.name}`, cache);
    } else {
      alert("Syntax error");
    }
  };

  function handleChange(e) {
    if (e.target.value.length < 30) {
      setNewVideo(e.target.value);
    } else {
      alert("maximum 30 chars");
    }
  }

  return (
    <form
      onSubmit={() => {
        handleSubmit(event, prop);
      }}
    >
      <button type="submit">Submit</button>

      <input type="text" value={newVideo} onChange={handleChange} />
    </form>
  );
};

export default AddVideo;
