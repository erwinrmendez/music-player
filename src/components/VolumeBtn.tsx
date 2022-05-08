import React from "react";
import {
  BiVolume,
  BiVolumeLow,
  BiVolumeFull,
  BiVolumeMute
} from "react-icons/bi";

const VolumeBtn: React.FC<{ volume: number }> = ({ volume }) => {
  if (volume === 0) return <BiVolumeMute />;
  else if (volume > 0 && volume <= 25) return <BiVolume />;
  else if (volume > 25 && volume <= 50) return <BiVolumeLow />;
  else return <BiVolumeFull />;
};

export default VolumeBtn;
