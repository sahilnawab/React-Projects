
import { useState, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, changeLength] = useState(5);
  const [numberIncuded, setNumberIncluded] = useState(false);
  const [spCharacheterincluded, setSpCharacheterincluded] = useState(false);
  const [password, setPassword] = useState("");
  const [text,SetButtontext]=useState("Copy");

  let passwordGenerator = () => {
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    let spChar = "!@#$%^&*()";
    let numbers = "1234567890";
    let pass="";
    for (let i = 0; i <= length; i++) {
      if (numberIncuded) str += numbers;
      if (spCharacheterincluded) str += spChar;

      let random = Math.floor(str.length * Math.random() + 1);
      pass += str.charAt(random);
    }
    setPassword(pass)

  };
  useEffect(() =>{ passwordGenerator()}, [length, numberIncuded, spCharacheterincluded]);
  
const passRef=useRef(null);

 let  copyPasswordToClipboard=()=>{
  passRef.current?.select();
  window.navigator.clipboard.writeText(password);
   SetButtontext("Copied")

  }
  return (


    <>
    
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-slate-300 text-black-100">
      <h2 className='p-5'>Password Generator</h2>
        <div className='w-full' >
          <input
            value={password}
            readOnly
            className="outline-none rounded-xl py-1 px-3"
            placeholder='password'
            ref={passRef}
          ></input>
          <button
          className='outline-none bg-blue-700 text-white px-3  rounded-md py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >
            
            {text}
          </button>
          </div>
          <div className="flex  space-x-4 p-4">
            <div className="lengthrange">
              <input
                type='range'
                min={6}
                max={100}
                value={length}
                onChange={(event) =>changeLength(event.target.value)}
                className='cursor-pointer '
              />
              <label htmlFor="Length">{length}</label>
            </div>
            <div className='numbercheck'>
              <input
                type='checkbox'
                defaultValue={numberIncuded}
                onChange={() => {
                  setNumberIncluded((pre) => !pre)
                }}
              />
              <label htmlFor='numbers'>Numbers</label>
            </div>
            <div className="spcharcheck">
              <input
                type='checkbox'
                defaultChecked={spCharacheterincluded}
                onChange={() => {
                  setSpCharacheterincluded((pre) => !pre)
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
       
      </div>
    </>
  )
}

export default App
