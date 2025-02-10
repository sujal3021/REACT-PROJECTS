import { useState,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [Password,setPassword]=useState("");

  const passwordRef=useRef(null)
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed)
    {
      str+="0123456789";
    }
    if(charAllowed)
      {
        str+="!@#$%^&*-_+=[]{}";
      }
  
      for(let i=1;i<=length;i++)
      {
        let char=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char);
      }
      setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password)
  },
  [Password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
     <h1 className="mt-20 text-4xl text-center text-white ">Password Generator</h1>
     <div className="w-full max-w-md mx-auto shadow-md mt-20 rounded-lg px-4 py-8 text-orange-500 bg-gray-700 ">
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text"
      value={Password}
      className="outline-none w-full py-1 px-3"
      placeholder="Password"
      readOnly
      ref={passwordRef}
      />
      <button onClick={copyPasswordToClipboard}
      className=" px-3 py-0.5 shrink-0 outline-none text-white w-20 bg-blue-500">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex item-center gap-x-1">
          <input
          type="range"
          min={8}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
            </div>
             <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor="charInput">Characters</label></div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
