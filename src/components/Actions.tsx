import React, { ButtonHTMLAttributes } from "react";
import { useState } from "react";
import { BiShareAlt, BiHeart, BiLinkExternal } from "react-icons/bi";
import { VerticalSlider } from "./Slider";
import VolumeIcon from "./VolumeIcon";

// action button
const ActionBtn: React.FC<ButtonHTMLAttributes<any> & { tooltip: string }> = (
  props
) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  // show and hide tooltip, activated on mouse enter
  const handleVisibility = () => {
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 1500);
  };

  return (
    <div>
      <button
        {...props}
        className="relative flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
        onMouseEnter={handleVisibility}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        {props.children}
        <span
          className={`${
            tooltipVisible ? "visible" : "invisible"
          } absolute w-14 -mt-7 -left-5 pb-0.5 text-center text-xs text-white text-opacity-60 bg-white bg-opacity-5 rounded-sm after:absolute after:top-full after:left-2/4 after:-ml-1 after:border-4 after:border-solid after:border-transparent after:border-t-white/5 transition-all ease-in-out`}
        >
          {props.tooltip}
        </span>
      </button>
    </div>
  );
};

const Actions: React.FC<{
  volumeVisible: boolean;
  setVolumeVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ volumeVisible, setVolumeVisible }) => {
  const [volume, setVolume] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex justify-between px-8 my-10">
      <ActionBtn tooltip="share">
        <BiShareAlt />
      </ActionBtn>
      <ActionBtn tooltip="like">
        <BiHeart
          className={`${
            liked ? "text-red-500" : "text-white"
          } transition-all ease-in-out active:text-red-600 active:filter active:drop-shadow-[0_0_2px_#DC2626]`}
          onClick={() => setLiked(!liked)}
        />
      </ActionBtn>
      <ActionBtn tooltip="open">
        <BiLinkExternal />
      </ActionBtn>
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        {volumeVisible && (
          <div className="absolute py-4 w-12 h-40 bottom-6 left-[-100%] bg-indigo-900 drop-shadow-md rounded-md z-10">
            <VerticalSlider
              value={volume}
              setValue={setVolume}
              maxValue={100}
            />
          </div>
        )}
        <ActionBtn
          tooltip="volume"
          onClick={(e) => {
            e.stopPropagation();
            setVolumeVisible(!volumeVisible);
          }}
        >
          <VolumeIcon volume={volume} />
        </ActionBtn>
      </div>
    </div>
  );
};

export default Actions;
