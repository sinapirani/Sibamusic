import { memo, useState } from "react"

const PlayerPlay = ({muisc}) => {

    const [isPlay, setPlay] = useState(true)

    return (
        { isPlay ? <img src="/picture/player/play.png" alt="" /> : <img src="/picture/player/pause.png" alt="" />}
    )
}

export default memo(PlayerPlay)