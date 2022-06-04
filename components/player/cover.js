/* eslint-disable @next/next/no-img-element */
import { forwardRef, useEffect } from "react";
import { memo } from "react";

const PlayerCover = forwardRef( ({img},ref) => {

    useEffect(()=>{
        console.log('cover rendered');   
    })

    return (
      <div className="w-1/2 flex-shrink-0 flex justify-center items-center">
        <img
          className="rounded-full w-[400px] h-[400px] "
          ref={ref}
          alt="cover of music"
        />
      </div>
    );
})

PlayerCover.displayName = 'playerCover'
export default memo(PlayerCover)