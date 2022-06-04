/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useTransition } from "react";
import style from  '../../styles/player.module.css'
import PlayerDuration from "./duration";
import PlayerCover from './cover'


const PlayerAudio = ({picChanger, music, timeOfMusic}) => {

  const value = useSelector((state) => state.songSlice.songs);
  const isPlaying = useSelector(state => state.playSlice.isPlaying)
  const [data, setData] = useState()
  const picRef = useRef()
  const router = useRouter()
  const dis = useDispatch();
  const [isPending, startTransition] = useTransition();
  const [isMoveAble, setIsMoveAble] = useState(false)
  const title = useRef()

  useEffect(()=>{
  })


  useEffect(()=>{
    value?.meta ? setData(JSON.parse(value.meta)) : ''
  },[value])

  useEffect(()=>{
    if (picRef.current && data ) {
      startTransition(()=>{
        picRef.current.src = `data:image/png;base64,${btoa(data?.common?.picture[0].data.data.reduce((data, byte) => data + String.fromCharCode(byte), ''))}`
        picChanger(`data:image/png;base64,${btoa(data?.common?.picture[0].data.data.reduce((data, byte) => data + String.fromCharCode(byte), ''))}`) 
        title.current.textContent.length > 8 ? setIsMoveAble(true) : setIsMoveAble(false);
      })
    }
  },[data])

  return (
    <div className="flex flex-row-reverse justify-evenly items-center w-full  ">
      <div className="w-1/2 flex-shrink-0  flex flex-col justify-center items-start ">
        <div
          className="mb-2 w-full text-white text-5xl font-extrabold max-w-[15ch] whitespace-nowrap overflow-hidden"
          suppressContentEditableWarning={true}
          contentEditable
        >
          <p ref={title} className={isMoveAble ? style.moveAbleText : ""}>
            {data?.common?.title}
          </p>
        </div>
        <p className=" w-full text-white text-xl">
          {data?.common?.albumartist || data?.common?.artist}
        </p>

        <PlayerDuration music={music} timeOfMusic={timeOfMusic} />
      </div>

      <PlayerCover img={''} ref={picRef} />

    </div>
  );

}

export default PlayerAudio