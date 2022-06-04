/* eslint-disable @next/next/no-img-element */

import { useEffect } from "react";


const PlayerNext = ({music}) => {


    const clicked = () => {
            console.log('clicked nezr');
            music.current.currentTime += 5
        
    }

    return(
        <img onClick={clicked} src="/player/next.png" width={60} height={50} alt="next for 5 second" />
    )

}

export default PlayerNext