import { useState } from "react";
import Actions from "./components/Actions";
import Controls from "./components/Controls";
import Display from "./components/Display";

const App = () => {
  const [volumeVisible, setVolumeVisible] = useState(false);

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 text-white bg-gray-800"
      onClick={() => {
        setVolumeVisible(false);
      }}
    >
      <div className="w-full max-w-sm p-4 rounded-md shadow-md bg-gradient-to-b from-indigo-900 to-gray-900">
        <Display />
        <Controls />
        <Actions
          volumeVisible={volumeVisible}
          setVolumeVisible={setVolumeVisible}
        />
      </div>
    </div>
  );
};

export default App;
