/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import mp3tag from "mp3tag.js";
import axios from "axios";
import { useSelector } from "react-redux";
import { arrayBufferToBlob } from "blob-util";
import { useRouter } from "next/router";


const PlayerAudio = ({picChanger}) => {

  const value = useSelector((state) => state.songSlice.songs);
  console.log('value:', value);
  const [data, setData] = useState()
  const [pic, setPic] = useState()
  const picRef = useRef()
  const router = useRouter()
  const [audio] = useState(typeof Audio != 'undefined' && new Audio())

  useEffect(()=>{
    value?.song ? setData(JSON.parse(value.meta)) : router.push("selectSong");
  },[value])

  useEffect(()=>{
    data ? setPic(data?.common?.picture[0].data.data) : ''
  },[data])

  useEffect(()=>{
    pic ? picRef.current.src = `data:image/png;base64,${btoa(pic.reduce((data, byte) => data + String.fromCharCode(byte), ''))}` : ''
    pic ? picChanger(`data:image/png;base64,${btoa(pic.reduce((data, byte) => data + String.fromCharCode(byte), ''))}`) : ''
  },[pic])

  useEffect(()=>{
    if(audio){
      const blob = new Blob([value.song], { type: "audio/wav" });
      const url = window.URL.createObjectURL(blob);
      audio.src = url
      audio.play()
    }
  },[audio])


  const AudioRef = useRef()
  
  return (
    <div className="flex flex-row-reverse justify-evenly items-center w-full ">
      <div>
        <p className="text-white text-5xl font-extrabold max-w-[15ch] mb-2" suppressContentEditableWarning={true} contentEditable>
          {data?.common?.title}
        </p>
        <p className="text-white text-xl">{data?.common?.albumartist || data?.common?.artist}</p>
      </div>

      <div>
        {pic ? <img className="rounded-full w-[400px] h-[400px] " ref={picRef}/> : ''}
      </div>
    </div>
  );

}

export default PlayerAudio