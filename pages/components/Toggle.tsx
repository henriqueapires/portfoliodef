import {RiMoonFoggyLine, RiSunFill, RiMoonFill} from "react-icons/ri"
import {BsFillMoonFill} from "react-icons/bs"
import { useState, useEffect } from "react";

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
        <button
        className={`btn right-0 top-[10px] mr-14 p-[10px] rounded-full bg-gray-200 dark:bg-[#525252] dark:hover:bg-[#646464e7] dark:text-white hover:bg-gray-300 justify-center flex items-center duration-300`}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
        <RiSunFill className="duration-100"/>
      ) : (
        <RiMoonFill className="duration-100"/>
      )}
      </button>
    </>
   )
}


export default Toggle