/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import mp3tag from "mp3tag.js";
import axios from "axios";
import { useSelector } from "react-redux";
import { arrayBufferToBlob } from "blob-util";


const PlayerAudio = ({picChanger}) => {

  const value = useSelector((state) => state.songSlice.songs);
  const [data, setData] = useState()
  const [pic, setPic] = useState()
  const picRef = useRef()

  useEffect(()=>{
    typeof value[0] == 'string' ? setData(JSON.parse(value[0])) : ''
  },[value])

  useEffect(()=>{
    console.log('data: ' , data);
    data ? setPic(data?.common?.picture[0].data.data) : ''
  },[data])

  useEffect(()=>{
    console.log('pic:' , pic);
    pic ? picRef.current.src = `data:image/png;base64,${btoa(pic.reduce((data, byte) => data + String.fromCharCode(byte), ''))}` : ''
    pic ? picChanger(`data:image/png;base64,${btoa(pic.reduce((data, byte) => data + String.fromCharCode(byte), ''))}`) : ''
  },[pic])

  const AudioRef = useRef()
  
  return (
    <div className="flex flex-row-reverse justify-evenly items-center w-full ">
      <div>
        <p className="text-white text-5xl font-extrabold w-full">
          {data?.common?.title}
        </p>
        <p className="text-white text-xl">{data?.common?.albumartist}</p>
      </div>

      <div>
        {pic ? <img className="rounded-full w-[400px] h-[400px] " ref={picRef}/> : ''}
      </div>
    </div>
  );

}

export default PlayerAudio