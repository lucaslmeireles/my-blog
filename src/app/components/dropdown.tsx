'use client'
import { useState } from "react";
import { RiTranslate2 } from "react-icons/ri";

export default function Dropdown(){
    const [dropdown, setDropdown] = useState(false)
    const onClickButton = () => {
        setDropdown(!dropdown)
    }
    return (
        <div className="flex flex-col place-content-end z-10">
        <button className="bg-white w-5 h-4 sm:w-10 sm:h-10 rounded-lg flex flex-row justify-center items-center"
        onClick={onClickButton}
        >
            <RiTranslate2 className='w-6 h-6'/>
        </button>
        {dropdown && (
            <div className="px-2 rounded-b-md bg-white">
                <p>English</p>
                <p>Portugês</p>
            </div>
        )}
        </div>

    )
}