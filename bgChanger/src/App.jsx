import { useState } from 'react';

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed inset-x-0 bottom-12 px-2 flex justify-center">
        <div className="flex flex-row items-center justify-center bg-white shadow-xl gap-3 px-6 py-4 rounded-2xl">
          <button onClick={()=>setColor("red")} className=" outline-none px-4 py-2 bg-red-500 text-white rounded-full"
          style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("yellow")} className=" outline-none px-4 py-2 bg-red-500 text-white rounded-full"
          style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>setColor("green")} className=" outline-none px-4 py-2 bg-red-500 text-white rounded-full"
          style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} className=" outline-none px-4 py-2 bg-red-500 text-white rounded-full"
          style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("pink")} className=" outline-none px-4 py-2 bg-red-500 text-white rounded-full"
          style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=>setColor("brown")} className=" outline-none px-4 py-2 bg-red-500 text-white rounded-full"
          style={{backgroundColor:"brown"}}>Brown</button>
          <button onClick={()=>setColor("orange")} className=" outline-none px-4 py-2 bg-red-500 text-white rounded-full"
          style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={()=>setColor("purple")} className=" outline-none px-4 py-2 bg-red-500 text-white rounded-full"
          style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=>setColor("grey")} className=" outline-none px-4 py-2 bg-red-500 text-white rounded-full"
          style={{backgroundColor:"grey"}}>Grey</button>
          <button onClick={()=>setColor("aqua")} className=" outline-none px-4 py-2 bg-red-500 text-white rounded-full"
          style={{backgroundColor:"aqua"}}>Aqua</button>
        </div>
      </div>
    </div>
  );
}

export default App;
