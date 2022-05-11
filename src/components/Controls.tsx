import { ButtonHTMLAttributes, useState } from "react";
import {
  BiPlay,
  BiPause,
  BiFastForward,
  BiRewind,
  BiRepeat,
  BiShuffle
} from "react-icons/bi";

const ControlBtn: React.FC<ButtonHTMLAttributes<any>> = (props) => {
  return (
    <button
      {...props}
      className={`flex items-center justify-center transition-colors ease-in rounded-full active:bg-white/5 active:scale-90 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

const Controls = () => {
  const [playing, setPlaying] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 my-10">
      <ControlBtn
        className={`${repeat ? "opacity-100" : "opacity-50"} w-8 h-8`}
        onClick={() => setRepeat(!repeat)}
      >
        <BiRepeat />
      </ControlBtn>
      <ControlBtn className="w-10 h-10 text-3xl">
        <BiRewind className="-ml-1" />
      </ControlBtn>
      <ControlBtn
        className="text-6xl w-14 h-14"
        onClick={() => setPlaying(!playing)}
      >
        {playing ? <BiPause /> : <BiPlay className="ml-1" />}
      </ControlBtn>
      <ControlBtn className="w-10 h-10 text-3xl">
        <BiFastForward className="ml-1" />
      </ControlBtn>
      <ControlBtn
        className={`${shuffle ? "opacity-100" : "opacity-50"} w-8 h-8`}
        onClick={() => setShuffle(!shuffle)}
      >
        <BiShuffle />
      </ControlBtn>
    </div>
  );
};

export default Controls;
