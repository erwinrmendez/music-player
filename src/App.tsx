import Actions from "./components/Actions";
import Controls from "./components/Controls";
import Display from "./components/Display";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="w-full max-w-sm p-4 rounded-md shadow-md app-container">
        <Display />
        <Controls />
        <Actions />
      </div>
    </div>
  );
};

export default App;
