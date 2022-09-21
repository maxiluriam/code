import { useState } from "react";

const AddVideo = (prop) => {
  const [newVideo, setNewVideo] = useState("");

  const editTest = async (_id, newVideoList) => {
    const res = await fetch("/api/test/edit", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        _id: _id,
        name: `${prop.name}`,
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
    console.log(prop.prop.videoList);
    const cache = [...videoList, e.target[1].value];

    editTest(
      prop.prop._id,

      {
        body: JSON.stringify({
          name: `${prop.prop.name}`,
          videoList: ["cache"],
        }),
      }
    );
  };

  function handleChange(e) {
    if (e.target.value.length < 10) {
      setNewVideo(e.target.value);
    } else {
      alert("maximum 10 chars");
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
