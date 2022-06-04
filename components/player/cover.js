/* eslint-disable @next/next/no-img-element */
import { forwardRef, useEffect } from "react";
import { memo } from "react";

const PlayerCover = forwardRef( ({img},ref) => {


    return (
      <div className="lg:w-1/2 w-full flex-shrink-0 flex justify-center items-center">
        <img
          className="rounded-full lg:w-[400px] lg:h-[400px] w-[70vw] h-[70vw] "
          ref={ref}
          alt="cover of music"
        />
      </div>
    );
})

PlayerCover.displayName = 'playerCover'
export default memo(PlayerCover)