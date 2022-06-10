/* eslint-disable @next/next/no-img-element */
import { memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useTransition } from "react";
import PlayerDuration from "./duration";
import PlayerCover from './cover'
import PlayerTitle from './title'
import PlayerDescription from "./descrition";
import PlayerControls from "./controls/controls";
import PlayerLoop from "./controls/loop";


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
  const [context, setContext] = useState()
  const [src, setSrc] = useState()
  const [analyser, setAnalyser] = useState()
  const [frequency, setFrequency] = useState()

  useEffect(()=>{
    setContext(new (window.AudioContext || window.webkitAudioContext)());
  },[])

  useEffect(()=>{
    context && typeof context.source == 'undefined' ? setSrc(context.createMediaElementSource(music.current)) : ''
    context ? setAnalyser(context.createAnalyser()) : ''
  },[context])  

  useEffect(()=>{
    if(context && analyser && src){
      console.log('ok');
      src.connect(analyser); 
      analyser.connect(context.destination)
      setFrequency(new Uint8Array(analyser.frequencyBinCount));
    }
  },[analyser])

  useEffect(()=>{
    console.log('anal',analyser);
    console.log('fre',frequency);
    console.log('con',context);
    console.log('src',src);
    context ? console.log("context src", context.source) : ''
  },[frequency])



  useEffect(()=>{
    value?.meta ? setData(JSON.parse(value.meta)) : ''
    !value?.meta ? router.push('selectSong') : ''
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
    <div className="flex lg:flex-row-reverse flex-col-reverse lg:justify-evenly justify-center items-center w-full  ">
      <div className="lg:w-1/2 w-5/6 mt-5 flex-shrink-0 flex flex-col justify-center items-center lg:items-start ">
        <PlayerTitle ref={title} isMoveAble={isMoveAble} data={data} />
        <PlayerDescription data={data} />
        <PlayerDuration music={music} timeOfMusic={timeOfMusic} />
        <PlayerControls music={music}/>
      </div>
      <PlayerCover img={""} ref={picRef} />
    </div>
  );

}

export default memo(PlayerAudio)