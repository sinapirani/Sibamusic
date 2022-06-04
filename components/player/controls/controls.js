import { memo } from "react"
import PlayerNext from "./next";
import PlayerPlay from "./play"
import PlayerPrev from "./prev";


const PlayerControls = ({music}) => {
    return (
      <div className="lg:w-full mt-4 flex justify-start items-center">
        <PlayerPrev music={music}/>
        <PlayerPlay music={music} />
        <PlayerNext music={music}/>
      </div>
    );
}

export default memo(PlayerControls)