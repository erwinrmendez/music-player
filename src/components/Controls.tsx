import { useState } from "react";
import {
  BiPlayCircle,
  BiPauseCircle,
  BiFastForward,
  BiRewind,
  BiRepeat,
  BiShuffle
} from "react-icons/bi";

const Controls = () => {
  const [playing, setPlaying] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  return (
    <div className="flex justify-between px-4 my-10">
      <button
        className={repeat ? "opacity-100" : "opacity-50"}
        onClick={() => setRepeat(!repeat)}
      >
        <BiRepeat />
      </button>
      <button className="text-2xl">
        <BiRewind />
      </button>
      <button className="text-5xl" onClick={() => setPlaying(!playing)}>
        {playing ? <BiPauseCircle /> : <BiPlayCircle />}
      </button>
      <button className="text-2xl">
        <BiFastForward />
      </button>
      <button
        className={shuffle ? "opacity-100" : "opacity-50"}
        onClick={() => setShuffle(!shuffle)}
      >
        <BiShuffle />
      </button>
    </div>
  );
};

export default Controls;
