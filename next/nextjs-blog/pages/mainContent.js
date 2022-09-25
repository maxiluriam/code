

import { GetServerSideProps } from "next";

import VideoPlayer from "./videoPlayer";

import AddVideo from "./addVideo";
import { useState } from "react";


function MainContent(props) {

   const [video, setUser] = useState("");

   console.log(props)
    

   return(<div>
   
      <AddVideo prop={props.prop.test[0]} ></AddVideo>
      </div>)
 }

   export default MainContent;

