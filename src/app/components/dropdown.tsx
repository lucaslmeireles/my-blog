'use client'
import { useState } from "react";
import { RiTranslate2 } from "react-icons/ri";

export default function Dropdown(){
    const [dropdown, setDropdown] = useState(false)
    const onClickButton = () => {
        setDropdown(!dropdown)
    }
    return (
        <div className="flex flex-col justify-items-end relative right-0">
        <button className="bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex flex-row justify-center items-center"
        onClick={onClickButton}
        >
            <RiTranslate2 className='w-6 h-6'/>
        </button>
        {dropdown && (
            <div className="px-2 py-2 rounded-b-md bg-white flex flex-col">
                <a href="/en" className="text-xs sm:text-base">English</a>
                <a href="/pt" className="text-xs sm:text-base">Português</a>
            </div>
        )}
        </div>

    )
}