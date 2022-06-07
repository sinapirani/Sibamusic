import { memo } from "react"
import style from '../../../styles/btns.module.css'


const PlayerPrev = ({music}) => {

    const prev = () =>{
        if(music?.current)
            music.current.currentTime -= 5
    }

    return (
      <img
        className={style.btn}
        onClick={prev}
        height={60}
        width={60}
        src="/player/prev.png"
        alt=""
      />
    );
}

export default memo(PlayerPrev)