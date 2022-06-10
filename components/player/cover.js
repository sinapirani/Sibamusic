/* eslint-disable @next/next/no-img-element */
import { forwardRef, useEffect } from "react";
import { memo } from "react";
import style from '../../styles/cover.module.css'

const PlayerCover = forwardRef((props,ref) => {

    useEffect(()=>{
      console.log(ref);
    }) 
    return (
      <div  className="lg:w-1/2 w-full flex-shrink-0 flex justify-center items-center select-none">
        <div ref={ref.borderRef} className=" max-h-[420px] -z-10 absolute border-[40px] lg:w-[400px] lg:h-[400px] w-[70vw] h-[70vw] box-content border-green-500 border-solid rounded-full"></div>
          <img
            className={` ${style.cover} rounded-full lg:w-[400px] lg:h-[400px] w-[70vw] h-[70vw] `}
            ref={ref.picRef}
            alt="cover of music"
          />
      </div>
    ); 
})

PlayerCover.displayName = 'playerCover'
export default memo(PlayerCover)