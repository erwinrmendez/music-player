import { useState } from "react";
import { formatTime } from "../utils";
import { HorizontalSlider } from "./Slider";

const Display = () => {
  const [value, setValue] = useState(0);
  const duration = 221 * 1000; //seconds to ms

  return (
    <>
      <div className="relative m-auto bg-indigo-800 rounded-sm h-80">
        <div className="absolute bottom-0 w-full">
          <HorizontalSlider
            value={value}
            setValue={setValue}
            maxValue={duration}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between px-2 my-3 text-xs select-none opacity-70">
          <span>{formatTime(value)}</span>
          <span>- {formatTime(duration - value)}</span>
        </div>
        <div className="text-center">
          <div className="font-bold">Loud Places in the Dark</div>
          <div className="text-xs opacity-50">Reny Wallow</div>
        </div>
      </div>
    </>
  );
};

export default Display;
