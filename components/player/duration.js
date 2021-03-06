
import { memo, useEffect, useRef, useState, useTransition } from "react"

const PlayerDuration = ({ music }) => {
  const [isMouseDown, setIsMouseDown] = useState();
  const [time, setTime] = useState(0);
  const rangeRef = useRef();
  const parentRef = useRef();
  const [isPending, startTransition] = useTransition();

  const timeUpdate = () => {
    typeof music.current != 'undefined' ? setTime((music?.current?.currentTime * 100) / music?.current?.duration + "%") : ''
  };

  const rangeMouseDown = (e) => {
    setIsMouseDown(true);
  };

  const rangeMouseUp = (e) => {
    setIsMouseDown(false);
    isMouseDown
      ? (rangeRef.current.style.width =
          e.pageX - parentRef.current.getBoundingClientRect().left + "px")
      : "";
    music.current.ontimeupdate = timeUpdate;
  };

  const rangeMove = (e) => {
    if(isMouseDown){
      music.current.ontimeupdate = () => 0;
      (rangeRef.current.style.width = e.pageX - parentRef.current.getBoundingClientRect().left + "px")
    }
  };

  const rangeLeave = (e) => {
    isMouseDown
      ? (rangeRef.current.style.width =
          e.pageX - parentRef.current.getBoundingClientRect().left + "px")
      : "";
    setIsMouseDown(false);
    music.current.ontimeupdate = timeUpdate;
  }
  
  const rangeClicked = (e) => {
    rangeRef.current.style.width =
      e.pageX - parentRef.current.getBoundingClientRect().left + "px";
    music.current.currentTime =
      (((rangeRef.current.offsetWidth * 100) / parentRef.current.offsetWidth) *
        music.current.duration) /
      100;
  };

  useEffect(() => {
    if (music.current && parentRef.current) {
      music.current.ontimeupdate = timeUpdate;
      music.current.loop = true;
    }
  }, [music]);

  // useEffect(() => {
  //   if (document) {
  //     document.body.onmouseup = (e) => {
  //       isMouseDown
  //         ? (music.current.currentTime =
  //             (((rangeRef.current.offsetWidth * 100) /
  //               parentRef.current.offsetWidth) *
  //               music.current.duration) /
  //             100)
  //         : "";
  //       setIsMouseDown(false);
  //     };
  //   }
  // }, []);

  return (
    <>
      <div
        ref={parentRef}
        onMouseDown={rangeMouseDown}
        onMouseUp={rangeMouseUp}
        onMouseMove={rangeMove}
        onMouseLeave={rangeLeave}
        onClick={rangeClicked}
        className="lg:w-2/3 w-full lg:h-4 h-4 rounded-full lg:mt-12 mt-3 bg-white overflow-hidden"
      >
        <div
          className="w-full lg:h-4 h-4 bg-red-500 outline-none rounded-full "
          style={{ width: time ? time : 0 }}
          ref={rangeRef}
        ></div>
      </div>
    </>
  );
};

export default memo(PlayerDuration)