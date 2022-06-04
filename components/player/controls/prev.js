import { memo } from "react"


const PlayerPrev = ({music}) => {

    const prev = () =>{
        if(music?.current)
            music.current.currentTime -= 5
    }

    return (
      <img
        onClick={prev}
        height={60}
        width={60}
        src="/player/prev.png"
        alt=""
      />
    );
}

export default memo(PlayerPrev)