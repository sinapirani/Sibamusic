/* eslint-disable @next/next/no-img-element */
import { memo, useEffect, useState } from "react"
import { useTransition } from "react"
import style from '../../../styles/btns.module.css'
import {IS_PLAYING} from '../../../redux/playSlice'
import { useDispatch, useSelector } from "react-redux"

const PlayerPlay = ({music}) => {

    const [isPending, startTransition] = useTransition()
    const isPlay = useSelector((state) => state.playSlice.isPlaying);
    const dis = useDispatch()
    
    const playClicked = () => {
      dis(IS_PLAYING(true)) 
    }
    
    const pauseClicked = () => {
      dis(IS_PLAYING(false)); 
    }

    useEffect(()=>{
      isPlay ? music.current.play() : music.current.pause();
    },[isPlay])

    const musicEnded = () => {
        startTransition(()=>{
            setPlay(false);
            console.log("falsed");
        })
    }


    return (
      <>
        {isPlay ? (
          <img
            className={style.btn + 'select-none'}
            onClick={pauseClicked}
            height={70}
            width={70}
            src="/player/pause.png"
            alt="pause the music"
          />
        ) : (
          <img
            className={style.btn + 'select-none'}
            onClick={playClicked}
            height={70}
            width={70}
            src="/player/play.png"
            alt="play the music"
          />
        )}
      </>
    );
}

export default memo(PlayerPlay)