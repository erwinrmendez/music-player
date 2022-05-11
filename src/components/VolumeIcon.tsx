import React from "react";
import {
  BiVolume,
  BiVolumeLow,
  BiVolumeFull,
  BiVolumeMute
} from "react-icons/bi";

const VolumeIcon: React.FC<{ volume: number }> = ({ volume }) => {
  if (volume === 0) return <BiVolumeMute />;
  else if (volume > 0 && volume <= 25) return <BiVolume />;
  else if (volume > 25 && volume < 75) return <BiVolumeLow />;
  else return <BiVolumeFull />;
};

export default VolumeIcon;
