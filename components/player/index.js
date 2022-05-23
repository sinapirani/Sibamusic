import { useEffect, useRef } from "react";
import mp3tag from "mp3tag.js";
import axios from "axios";



const PlayerAudio = () => {

  const AudioRef = useRef()
  
  const data = axios.get(
    "http://v1.musica.asia/files/Shahab%20Tiam%20-%20Bi%20Hashiye.mp3",
    {withCredentials: false,}
  ).then(res => {
    console.log(res.data);
  }).catch((err)=>{
    console.log(err);
    
  })

  // const reader = new FileReader()
  // reader.readAsArrayBuffer(AudioRef?.current?.src)
  // reader.onload = () => {
  //   const buffer = reader.result;

  //   const tag = new mp3tag(buffer)
  //   tag.read()
  //   console.log(tag.tags);

  // }
  
  return (
    <div>
      <audio ref={AudioRef} src="http://v1.musica.asia/files/Shahab%20Tiam%20-%20Bi%20Hashiye.mp3" controls></audio>
    </div>
  );

}

export default PlayerAudio