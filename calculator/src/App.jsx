import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (buttonValue) => {
    setValue((prev) => prev + buttonValue);
  };

  const findResult=()=>{
    try {
      // Replace 'X' with '*' for multiplication
      const expression = value.replace(/X/g, '*');
      // Evaluate the expression
      const result = eval(expression);
      setValue(result.toString());
    } catch (error) {
      setValue('Error');
    }
  }

  const resetDisplay=()=>{
    setValue(' ');
  }

  return (
    <>
      <h1 className="text-blue-500 text-[80px]">Calculator</h1>
      <div className="bg-black h-[700px] w-[600px] ml-80 border-[5px] border-blue-400 rounded-3xl">
        <div className="bg-white w-full h-28 flex items-center justify-end text-5xl text-blue-500 p-4 rounded-lg border-[5px] border-blue-400">
          {value}
        </div>
        <div className="mt-10 h-[580px] w-full p-7 flex flex-col items-start gap-5 flex-wrap">
          <button onClick={() => handleButtonClick('1')} className="bg-blue-400 h-24 w-24 rounded-full flex-shrink-0 text-white text-5xl p-2">1</button>
          <button onClick={() => handleButtonClick('2')} className="bg-blue-400 h-24 w-24 rounded-full flex-shrink-0 text-white text-5xl p-2">2</button>
          <button onClick={() => handleButtonClick('3')} className="bg-blue-400 h-24 w-24 rounded-full flex-shrink-0 text-white text-5xl p-2">3</button>
          <button onClick={() => handleButtonClick('0')} className="bg-blue-400 h-24 w-24 rounded-full flex-shrink-0 text-white text-5xl p-2">0</button>
          <button onClick={() => handleButtonClick('4')} className="bg-blue-400 h-24 w-24 rounded-full flex-shrink-0 text-white text-5xl p-2">4</button>
          <button onClick={() => handleButtonClick('5')} className="bg-blue-400 h-24 w-24 rounded-full flex-shrink-0 text-white text-5xl p-2">5</button>
          <button onClick={() => handleButtonClick('6')} className="bg-blue-400 h-24 w-24 rounded-full flex-shrink-0 text-white text-5xl p-2">6</button>
          <button onClick={() => resetDisplay()} className="bg-blue-400 h-24 w-24 rounded-full flex-shrink-0 text-white text-5xl p-2">C</button>
          <button onClick={() => handleButtonClick('7')} className="bg-blue-400 h-24 w-24 rounded-full flex-shrink-0 text-white text-5xl p-2">7</button>
          <button onClick={() => handleButtonClick('8')} className="bg-blue-400 h-24 w-24 rounded-full flex-shrink-0 text-white text-5xl p-2">8</button>
          <button onClick={() => handleButtonClick('9')} className="bg-blue-400 h-24 w-24 rounded-full flex-shrink-0 text-white text-5xl p-2">9</button>
          <button onClick={() => findResult()} className="bg-blue-400 h-24 w-24 rounded-full flex-shrink-0 text-white text-5xl p-2">=</button>
          <button onClick={() => handleButtonClick('+')} className="bg-blue-400 h-24 w-24 rounded-full flex-shrink-0 text-white text-5xl p-2">+</button>
          <button onClick={() => handleButtonClick('-')} className="bg-blue-400 h-24 w-24 rounded-full flex-shrink-0 text-white text-5xl p-2">-</button>
          <button onClick={() => handleButtonClick('X')} className="bg-blue-400 h-24 w-24 rounded-full flex-shrink-0 text-white text-5xl p-2">X</button>
          <button onClick={() => handleButtonClick('/')} className="bg-blue-400 h-24 w-24 rounded-full flex-shrink-0 text-white text-5xl p-2">/</button>
        </div>
      </div>
    </>
  );
}

export default App;
