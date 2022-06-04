import { memo, useEffect, useRef, useState, useTransition } from "react"

const PlayerDuration = ({music}) => {

    const [isMouseDown, setIsMouseDown] = useState()
    const [time, setTime] = useState(0)
    const rangeRef = useRef()
    const parentRef = useRef()
    const [isPending, startTransition ] = useTransition()
    
    const timeUpdate = () => {
         startTransition(() =>{
           setTime((music.current.currentTime * 100) / music.current.duration + "%")
        })
    }

    const rangeMouseDown = (e) => {
        setIsMouseDown(true)
    }   

    const rangeMouseUp = () => {
        setIsMouseDown(false)
    }

    const rangeClicked = (e) => {
        isMouseDown ? music.current.currentTime = ((e.target.value * music.current.duration) / 100) : ''
    }

    useEffect(()=>{
        if(music.current && parentRef.current){
            music.current.ontimeupdate = timeUpdate
        }
    },[music])

    return (
      <>
        <div ref={parentRef} className="lg:w-2/3 w-full lg:h-2 h-4 rounded-full mt-12 bg-white overflow-hidden">
          {music.current ? (
            <div
              className="w-full lg:h-2 h-4 bg-red-500 outline-none rounded-full "
              style={{width: time}}
              onMouseUp={rangeMouseUp}
              onMouseDown={rangeMouseDown}
              onMouseMove={rangeClicked}
              ref={rangeRef}
              type="range"
            ></div>
          ) : (
            ""
          )}
        </div>
      </>
    );

}

export default memo(PlayerDuration)