'use client'
import { MdLightMode, MdNightlight } from "react-icons/md";
import { useState } from "react"

export default function Switcher(){
    const [mode, setMode] = useState(false)
    const onClickButton = () => {
        if (mode) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
        setMode(!mode)
    }
    return (
        <div>
            <button className="bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex flex-row justify-center items-center"
            onClick={onClickButton}
            >
                {mode ? <MdNightlight /> :  <MdLightMode/>}
            </button>
        </div>
    )
}