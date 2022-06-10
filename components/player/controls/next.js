/* eslint-disable @next/next/no-img-element */

import { useEffect } from "react";
import style from "../../../styles/btns.module.css";


const PlayerNext = ({music}) => {


    const clicked = () => {
            console.log('clicked nezr');
            music.current.currentTime += 5
        
    }

    return(
        <img className={style.btn + 'select-none'} onClick={clicked} src="/player/next.png" width={60} height={50} alt="next for 5 second" />
    )

}

export default PlayerNext