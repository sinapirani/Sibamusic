import { memo } from "react"
import PlayerPlay from "./play"


const PlayerControls = ({music}) => {
    return(
        <PlayerPlay music={music}/>
    )
}

export default memo(PlayerControls)