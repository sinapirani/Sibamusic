/* eslint-disable @next/next/no-img-element */
import { memo, useEffect, useState } from "react"
import { useTransition } from "react"

const PlayerPlay = ({music}) => {

    const [isPlay, setPlay] = useState( true )
    const [isPending, startTransition] = useTransition()

    
    const playClicked = () => {
            setPlay(true)
            music?.current.play()
    }
    
    const pauseClicked = () => {
            setPlay(false)
            music.current.pause()
    }

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
            onClick={pauseClicked}
            height={70}
            width={70}
            src="/player/pause.png"
            alt="pause the music"
          />
        ) : (
          <img
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