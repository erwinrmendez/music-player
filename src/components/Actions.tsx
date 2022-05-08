import React from "react";
import { useState } from "react";
import { BiShareAlt, BiHeart, BiLinkExternal } from "react-icons/bi";
import VolumeBtn from "./VolumeBtn";

// action button
const Button: React.FC<{ tooltip: string; children: any }> = ({
  tooltip,
  children
}) => {
  return (
    <div>
      <button className="flex justify-center opacity-50 hover:opacity-100 action-btn">
        {children}
        <span className="absolute w-14 -mt-7 -left-5 pb-0.5 text-center text-xs text-white text-opacity-60 bg-white bg-opacity-5 rounded-sm tooltip">
          {tooltip}
        </span>
      </button>
    </div>
  );
};

const Actions = () => {
  const [volume, setVolume] = useState(50);
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex justify-between px-6 my-10">
      <Button tooltip="share">
        <BiShareAlt />
      </Button>
      <Button tooltip="like">
        <BiHeart
          className={liked ? "text-red-500" : "text-white"}
          onClick={() => setLiked(!liked)}
        />
      </Button>
      <Button tooltip="open">
        <BiLinkExternal />
      </Button>
      <Button tooltip="volume">
        <VolumeBtn volume={volume} />
      </Button>
    </div>
  );
};

export default Actions;
