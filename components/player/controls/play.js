/* eslint-disable @next/next/no-img-element */
import { memo, useEffect, useState } from "react"

const PlayerPlay = ({music}) => {

    const [isPlay, setPlay] = useState( true )
    

    useEffect(()=>{
        console.log('music:', music);
    },[music])
    const playClicked = () => {
        if(music?.current)
            console.log('play clicked');
            setPlay(true)
            music?.current.play()
    }
    
    const pauseClicked = () => {
        if(music?.current)
            console.log('pause clicked');
            setPlay(false)
            music.current.pause()
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