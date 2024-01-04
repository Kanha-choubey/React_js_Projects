import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

const App = () => {
  // useRef hook
  const passwordRef = useRef(null);
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*+{}[]~";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

const copyPasswordClip = useCallback(()=>{
  passwordRef.current?.select()
window.navigator.clipboard.writeText(password)
},[password])

  useEffect(()=>{
    passwordGenerator();
  },[length , charAllowed , numberAllowed , setPassword , passwordGenerator])
  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-lg rounded-xl mt-12 px-5  py-5  text-orange-600 bg-gray-700">
        <h1 className="text-3xl mb-2 text-center  text-white">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none font-bold text-xl w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
           
          />
          <button  onClick={copyPasswordClip} className="outline-none bg-blue-700 font-bold text-white px-3 py-0.5 shrink-0 ">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer "
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length" className="text-xl">Length :{length}</label>
          </div>
          <div className="flex ml-2 items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="text-xl">
              Number
            </label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput" className="text-xl">
              Char
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
