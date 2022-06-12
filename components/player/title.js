import { forwardRef, memo } from "react";
import style from '../../styles/player.module.css'


const PlayerTitle = forwardRef(({ isMoveAble,data }, ref) => {
  return (
    <div
      className="mb-2 lg:mt-0 mt-9 w-full text-white text-5xl font-extrabold max-w-[15ch] whitespace-nowrap overflow-hidden"
      suppressContentEditableWarning={true}
      contentEditable>

      <p ref={ref} className={isMoveAble ? style.moveAbleText : ""}>
        {data?.common?.title}
      </p>

    </div>
  );
});

PlayerTitle.displayName = 'playerTitle'
export default memo(PlayerTitle)