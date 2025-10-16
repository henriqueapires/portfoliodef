import { RiSunFill, RiMoonFill} from "react-icons/ri"
import { useState, useEffect } from "react";
import { Switch } from "@mui/material";

const Toggle = () =>{
  const [darkMode, setDarkMode] = useState(true);

  useEffect(()=>{
        const body = document.querySelector('body') as HTMLBodyElement
        const status = localStorage.getItem('schemaColor')
        if (!status){
            localStorage.setItem('schemaColor', 'dark')
        }
        if (status === 'dark'){
            body.classList.add('dark')
            return
        }
            body.classList.remove('dark')
            setDarkMode(false)
  },[])

  useEffect(() =>{
        const body = document.querySelector('body') as HTMLBodyElement

        if(darkMode){
            localStorage.setItem('schemaColor', 'dark')
            body.classList.add('dark')
            return
        }
            localStorage.setItem('schemaColor', 'light')
            body.classList.remove('dark')
        },[darkMode])

        return (
            <>  
            <div className="flex items-center px-2">
                {darkMode ? <RiSunFill /> : <RiMoonFill/>}
                <Switch
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
                </div>
            </>
          );
}

export default Toggle