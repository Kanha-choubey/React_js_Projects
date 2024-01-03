import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-300 flex flex-wrap"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap gap-3 shadow-2xl bg-white   px-3 py-3 rounded-2xl">
            <button
              className="outline-none px-4 py-1 rounded-xl text-white "
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-xl text-white "
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>

            <button
              className="outline-none px-4 py-1 rounded-xl text-white "
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-xl text-white "
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-xl text-white "
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >
              black
            </button>
            <button
              className="outline-none px-4 py-1 rounded-xl text-white "
              style={{ backgroundColor: "brown" }}
              onClick={() => setColor("brown")}
            >
              Brown
            </button>
            <button
              className="outline-none px-4 py-1 rounded-xl text-white "
              style={{ backgroundColor: "pink" }}
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
          </div>

        </div>


      </div>
    </>
  );
};

export default App;
