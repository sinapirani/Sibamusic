import { useState } from "react";
import PlayerAudio from "../../components/player";



const Player = () => {

  const [pic, setPic] = useState("url(/home/bg.jpg)");
  const picChanger = (pic) => {
    setPic(`url(${pic})`)
  }

    return (
      <div className=" relative w-full h-screen overflow-hidden m-0 p-0 flex justify-center items-center bg-black ">
        <div
          style={{ backgroundImage: pic }}
          className={`absolute w-full h-screen bg-red-600 z-20 overflow-hidden  bg-cover bg-center blur-md scale-150 `}
        ></div>

        <div className="absolute flex justify-center items-center w-full h-screen box-border bg-[rgba(0,0,0,80%)] overflow-hidden z-40">
          <div className=" absolute h-[150vh] w-[150vh] bg-[#220036] opacity-25 blur-[188px] rounded-full z-0 "></div>

          <div className=" relative w-full h-screen flex justify-evenly items-center text-white z-50">
            <PlayerAudio picChanger={picChanger} />
          </div>
        </div>
      </div>
    );

}


export default Player

