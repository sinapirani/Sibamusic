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


const PlayerAudio = ({picChanger, music}) => {

  const value = useSelector((state) => state.songSlice.songs);
  const isPlaying = useSelector(state => state.playSlice.isPlaying)
  const [data, setData] = useState()
  const [isOk, setOk] = useState(false)
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
  const anim = useRef()
  const glitch = useRef()


  useEffect(()=>{
    console.log(context);
  },[context])

  useEffect(() => {
    !value?.meta ? router.push("selectSong") : setOk(true);
    value?.meta ? setData(JSON.parse(value.meta)) : "";
  }, [value]);

  useEffect(()=>{
    isOk && !context ? setContext(new (window.AudioContext || window.webkitAudioContext)()) : ''
  },[isOk])

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
      frequency && isOk ? visual() : ''
  },[frequency])

  const visual = () => {
    analyser?.getByteTimeDomainData(frequency);
    picRef.current ? picRef.current.style.transform = `scale(${(frequency[100])/100})` : ''
    // glitch.current ? glitch.current.style.opacity = `${(frequency[1])-40}%` : ''
    // console.log('frequency 5', frequency[5]/100);
    anim.current = requestAnimationFrame(visual);
  } 

  useEffect(()=>{
    if (picRef.current && data && data?.common?.picture) {
      startTransition(()=>{
        picRef.current.src = `data:image/png;base64,${btoa(data?.common?.picture[0].data.data.reduce((data, byte) => data + String.fromCharCode(byte), ''))}`
        picChanger(`data:image/png;base64,${btoa(data?.common?.picture[0].data.data.reduce((data, byte) => data + String.fromCharCode(byte), ''))}`) 
        title.current.textContent.length > 8 ? setIsMoveAble(true) : setIsMoveAble(false);
      })
    }
  },[data])

  return (
    <div className=" relative flex lg:flex-row-reverse flex-col-reverse lg:justify-evenly justify-center items-center w-full  ">
      
      {/* <div ref={glitch} className="absolute pointer-events-none -z-10 lg:w-full lg:h-screen bg-green-400/60 blur-md"></div> */}
      <div className="lg:w-1/2 w-5/6 mt-5 flex-shrink-0 flex flex-col justify-center items-center lg:items-start ">
        <PlayerTitle ref={title} isMoveAble={isMoveAble} data={data} />
        <PlayerDescription data={data} />
        <PlayerDuration music={music} />
        <PlayerControls music={music}/>
      </div>
      <PlayerCover ref={picRef} />
    </div>
  );

}

export default memo(PlayerAudio)