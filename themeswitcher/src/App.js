
import { useEffect, useState } from 'react';
import './App.css';
import { ThemeContextrprovider } from './Context/ThemeContext';
import Card from './Context/Compnents/Card';
import Button from './Context/Compnents/Button';


function App() {
  const [themeMode,SetThemeMode]=useState("light");


 function darkMode(){
    SetThemeMode("dark")
 }
function lightMode(){
  SetThemeMode("light")
}
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
   
    document.querySelector('html').classList.add(themeMode)

  },[themeMode])

  return (
 <ThemeContextrprovider value={{themeMode,darkMode,lightMode}}>
   <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Button/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card/>
              </div>
          </div>
      </div>

 </ThemeContextrprovider>
  );
}

export default App;
