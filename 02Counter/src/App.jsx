import { useState } from "react";

const App = () => {
  
  const [number , setNumber] = useState(10);
  const addNumber = ()=>{
    if(number<20){

      setNumber(number+1)
    }else{alert("value is no max")}
  }
  const removeNum = ()=>{
    if(number>0)
    setNumber(number-1)
  }
  
  const data1 = {
    name : "Kanha Choubey",
    details : "my name is kanha i am 27 year old",

  }


  return (
    <>
    <div className="">
    
    <h1 className="text-4xl text-center bg-green-500 rounded-xl p-5 mb-4">
    Count 
  </h1>    
    <div className="flex  justify-center mt-16">
      
     
      
      <button className="mr-5" onClick={addNumber}>Add by +1</button>
      <br/>
      <h1 className="text-6xl">{number}</h1>
      <button className="ml-5" onClick={removeNum}>Minus by -1</button>
    </div></div>
    </>
  );
};

export default App;
