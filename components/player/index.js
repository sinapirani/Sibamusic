/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import mp3tag from "mp3tag.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { arrayBufferToBlob } from "blob-util";
import { useRouter } from "next/router";
import { IS_PLAYING } from "../../redux/playSlice";
import { useTransition } from "react";


const PlayerAudio = ({picChanger}) => {

  const value = useSelector((state) => state.songSlice.songs);
  const isPlaying = useSelector(state => state.playSlice.isPlaying)
  const [data, setData] = useState()
  const [pic, setPic] = useState()
  const picRef = useRef()
  const router = useRouter()
  const audio = useRef()
  const dis = useDispatch();
  const [isPending, startTransition] = useTransition();

  useEffect(()=>{
    console.log('rerendered');
  })


  useEffect(()=>{
    value?.song ? setData(JSON.parse(value.meta)) : router.push("selectSong");
  },[value])

  useEffect(()=>{
    // console.log("picref",picRef.current);
    if (picRef.current && data ) {
      startTransition(()=>{
        picRef.current.src = `data:image/png;base64,${btoa(data?.common?.picture[0].data.data.reduce((data, byte) => data + String.fromCharCode(byte), ''))}`
        picChanger(`data:image/png;base64,${btoa(data?.common?.picture[0].data.data.reduce((data, byte) => data + String.fromCharCode(byte), ''))}`) 
      })
    }
  },[data])

  useEffect(()=>{
    if(!isPlaying){
      typeof Audio != "undefined" ? (audio.current = new Audio(value.song)) : "";
      audio.current.play()
      console.log('played');
      dis(IS_PLAYING(true))
    }
  },[audio.current])


  const AudioRef = useRef()
  
  return (
    <div className="flex flex-row-reverse justify-evenly items-center w-full ">
      <div>
        <div className="mb-2 text-white text-5xl font-extrabold max-w-[15ch] whitespace-nowrap overflow-hidden   " suppressContentEditableWarning={true} contentEditable>
          <p>{data?.common?.title}</p>
        </div>
        <p className="text-white text-xl">{data?.common?.albumartist || data?.common?.artist}</p>
      </div>

      <div>
        <img className="rounded-full w-[400px] h-[400px] " ref={picRef} alt='cover of music' />
      </div>
    </div>
  );

}

export default PlayerAudio