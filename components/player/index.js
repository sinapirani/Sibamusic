import { useEffect, useRef, useState } from "react";
import mp3tag from "mp3tag.js";
import axios from "axios";
import { useSelector } from "react-redux";


const PlayerAudio = () => {

  const value = useSelector((state) => state.songSlice.songs);
  const [data, setData] = useState()
  useEffect(()=>{
    typeof value[0] == 'string' ? setData(JSON.parse(value[0])) : ''
  },[value])

  useEffect(()=>{
    console.log('data: ' , data);
  },[data])
  const AudioRef = useRef()
  
  return (
    <div className="flex flex-row-reverse justify-evenly items-center w-full ">
      <div>
        <p className="text-white text-5xl font-extrabold">
          {data?.common?.title}
        </p>
        <p className="text-white text-xl">{data?.common?.albumartist}</p>
      </div>

      <div>
        <img src="" height={580} width={580} alt="" />
      </div>
    </div>
  );

}

export default PlayerAudio