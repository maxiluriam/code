import { useState } from "react";


const AddVideo = (prop) => {


  const [array, setArray] = useState(prop.prop.videoList);

  const [newVideo, setNewVideo] = useState("");

  
  const [i, setI] = useState(0);
  const [limit, setLimit] = useState(array.length - 1);

  

  const editTest = async (_id, name, newVideoList) => {
    const res = await fetch("/api/test/edit", {
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
     return data;
  };

  const handleSubmit = async function (e, array) {
    e.preventDefault();
    const videoList = array;
    let temp = "";

    if (e.target[1].value.includes("https://youtu.be/") === true) {
      temp = e.target[1].value.replace(
        "https://youtu.be/",
        "https://www.youtube.com/embed/"
      );

      const cache = [...videoList, temp];

      console.log(prop.prop.videoList);

      editTest(prop.prop._id, `${prop.prop.name}`, cache);

      setArray(cache)
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


  
  function checkNumber(i, limit) {
    if (i > limit) {
      return 0;
    } else if (i < 0) {
      return limit;
    } else {
      return i;
    }
  }

 async function removeVideo(i, array) {
    
    const cache = []


    for (let j = 0; j < array.length; j++) {
      if( i !== j ){
        cache = [...cache,array[j]]
      }
    }
    setArray(cache)
    editTest(prop.prop._id,prop.prop.name,cache)
     setArray(cache)
  }

  return (
<div>
    <form
      onSubmit={() => {
        handleSubmit(event, array);
      }}
    >
      <button type="submit">Submit</button>

      <input type="text" value={newVideo} onChange={handleChange} />
    </form>
    <div>
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


        <div className="button-container">
{array.map(function(item, index){
  {if(index === i){

    return <button disabled="disabled" ></button>
  }else if(index !== i){

    return <button onClick={() => { setI(index)}} ></button>
  }}
 })}
</div>

<button onClick={() => {setLimit(limit-1);removeVideo(i,array);setI(checkNumber(i, limit));}}>Delete</button>
 </div>
    </div>
  );
};

export default AddVideo;
