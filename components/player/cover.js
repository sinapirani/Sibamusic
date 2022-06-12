/* eslint-disable @next/next/no-img-element */
import { forwardRef, useEffect } from "react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from '../../styles/cover.module.css'
import { IS_PLAYING } from "../../redux/playSlice";
import { useState } from "react";

const PlayerCover = forwardRef((props,ref) => {

  const isPlay = useSelector(state => state.playSlice.isPlaying)
  const dis = useDispatch()
  const [image, setImage] = useState()

  useEffect(()=>{
    isPlay ? setImage('/player/pause.png') : setImage('/player/play.png')
  },[isPlay])

  const imgClickHandler = () => {
    isPlay ? dis(IS_PLAYING(false)) : dis(IS_PLAYING(true))
    console.log('played');
  }

  return (
    <div  className="lg:w-1/2 w-full flex-shrink-0 flex justify-center items-center select-none">
      <div ref={ref.borderRef} className="transition-[0s] max-h-[420px] -z-10 absolute lg:w-[400px] lg:h-[400px] w-[70vw] h-[70vw] box-content border-green-500 border-solid rounded-full"></div>
        <img
          src='/player/cover.jpg'
          loading="lazy"
          className={` ${style.cover} rounded-full lg:w-[400px] lg:h-[400px] w-[70vw] h-[70vw] hover:blur-sm hover:grayscale-[30] `}
          ref={ref.picRef}
          alt="cover of music"
        />
        <div className={` ${style.coversCover}  flex justify-center items-center absolute rounded-full lg:w-[400px] lg:h-[400px] w-[70vw] h-[70vw]  opacity-0 transition-[5s] hover:opacity-100 hover:backdrop-blur-lg`}>
          <img draggable={false} onClick={imgClickHandler} src={image} className="lg:w-[100px] lg:h-[100px] w-[20vw] h-[20vw] rounded-full absolute select-none  " />
        </div>
    </div>
  ); 
})

PlayerCover.displayName = 'playerCover'
export default memo(PlayerCover)