import { memo } from "react"
import PlayerLoop from "./loop";
import PlayerNext from "./next";
import PlayerPlay from "./play"
import PlayerPrev from "./prev";


const PlayerControls = ({music}) => {
    return (
      <div className="lg:w-full mt-4 flex lg:flex-row flex-col justify-start items-center select-none">
        <div className=' flex mr-4'>
          <PlayerPrev music={music} />
          <PlayerPlay music={music} />
          <PlayerNext music={music} />          
        </div>
        <PlayerLoop music={music} />
      </div>
    );
}

export default memo(PlayerControls)