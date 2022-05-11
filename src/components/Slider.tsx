import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform
} from "framer-motion";
import { clamp } from "../utils";

type TSlider = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  maxValue?: number;
};

// horizontal slider
const HorizontalSlider: React.FC<TSlider> = ({
  value,
  setValue,
  maxValue = 100
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const handleSize = 8;
  const axisValue = useMotionValue(0);
  const progress = useTransform(axisValue, (x) => x + handleSize / 2);
  const background = useMotionTemplate`linear-gradient(90deg, #8E8FA3 ${progress}px, #1D2049 0)`;

  useEffect(() => {
    const newProgress = value / maxValue;
    const progressBarBounds = progressBarRef.current!.getBoundingClientRect();
    axisValue.set(newProgress * progressBarBounds.width);
  }, [axisValue, maxValue, value]);

  const handleDrag = () => {
    const handleBounds = handleRef.current!.getBoundingClientRect();
    const midHandle = handleBounds.x + handleBounds.width / 2;
    const progressBarBounds = progressBarRef.current!.getBoundingClientRect();
    const newProgress =
      (midHandle - progressBarBounds.x) / progressBarBounds.width;
    const newValue = Number(newProgress.toFixed(2)) * maxValue; // to fixed value

    // set value to current position (relative to maxValue)
    setValue(clamp(newValue, maxValue));
  };

  const handlePointer = (e: React.PointerEvent<HTMLDivElement>) => {
    const { left, width } = progressBarRef.current!.getBoundingClientRect();
    const position = e.pageX - left;
    const newProgress = position / width;
    const newValue = newProgress * maxValue;
    setValue(clamp(newValue, maxValue));
  };

  return (
    <div className="relative flex flex-col justify-center">
      <motion.div className="absolute w-full h-1" style={{ background }} />
      <div
        ref={progressBarRef}
        className="absolute h-1"
        style={{ left: handleSize / 2, right: handleSize / 2 }}
      />
      <div ref={constraintsRef} className="absolute w-full">
        <motion.div
          ref={handleRef}
          drag="x"
          dragMomentum={false}
          dragConstraints={constraintsRef}
          dragElastic={0}
          onDrag={handleDrag}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onPointerDown={() => setIsDragging(true)}
          onPointerUp={() => setIsDragging(false)}
          className="relative z-10 m-0 bg-gray-300 rounded-full active:scale-125"
          style={{ width: handleSize, height: handleSize, x: axisValue }}
          animate={{ scale: isDragging ? 1.5 : 1 }}
        />
      </div>
      <div className="absolute w-full h-3" onPointerDown={handlePointer} />
    </div>
  );
};

// vertical slider
const VerticalSlider: React.FC<TSlider> = ({
  value,
  setValue,
  maxValue = 100
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const handleSize = 8;
  const axisValue = useMotionValue(0);
  const progress = useTransform(axisValue, (x) => x + handleSize / 2);
  const background = useMotionTemplate`linear-gradient(-180deg, #1D2049 ${progress}px, #8E8FA3 ${progress}px)`;

  useEffect(() => {
    const newProgress = value / maxValue;
    const progressBarBounds = progressBarRef.current!.getBoundingClientRect();

    // adjusting the value by substracting the height,
    // considering that the position is relative to the top of the screen
    axisValue.set((1 - newProgress) * progressBarBounds.height);
  }, [axisValue, maxValue, value]);

  const handleDrag = () => {
    const handleBounds = handleRef.current!.getBoundingClientRect();
    const midHandle = handleBounds.y + handleBounds.height / 2;
    const progressBarBounds = progressBarRef.current!.getBoundingClientRect();
    const newProgress =
      (midHandle - progressBarBounds.y) / progressBarBounds.height;

    // adjusting the value by substracting the maxValue,
    // considering that the position is relative to the top of the screen
    const newValue = (1 - Number(newProgress.toFixed(2))) * maxValue;
    setValue(clamp(newValue, maxValue));
  };

  const handlePointer = (e: React.PointerEvent<HTMLDivElement>) => {
    const { top, height } = progressBarRef.current!.getBoundingClientRect();
    const position = e.pageY - top;
    const newProgress = position / height;

    // adjusting the value by substracting the maxValue,
    // considering that the position is relative to the top of the screen
    const newValue = (1 - newProgress) * maxValue;
    setValue(clamp(newValue, maxValue));
  };

  return (
    <div className="relative flex justify-center w-full h-full">
      <motion.div className="absolute w-1 h-full py-2" style={{ background }} />
      <div
        ref={progressBarRef}
        className="absolute w-1"
        style={{ top: handleSize / 2, bottom: handleSize / 2 }}
      />
      <div ref={constraintsRef} className="absolute h-full">
        <motion.div
          ref={handleRef}
          drag="y"
          dragMomentum={false}
          dragConstraints={constraintsRef}
          dragElastic={0}
          onDrag={handleDrag}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onPointerDown={() => setIsDragging(true)}
          onPointerUp={() => setIsDragging(false)}
          className="relative z-10 m-0 bg-gray-300 rounded-full active:scale-125"
          style={{ width: handleSize, height: handleSize, y: axisValue }}
          animate={{ scale: isDragging ? 1.5 : 1 }}
        />
      </div>
      <div className="absolute w-3 h-full" onPointerDown={handlePointer} />
    </div>
  );
};

export { HorizontalSlider, VerticalSlider };
