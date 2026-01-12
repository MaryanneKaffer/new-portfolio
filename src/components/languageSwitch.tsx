"use client";
import { useLanguage } from "../context/languageContext";
import { MdLanguage } from "react-icons/md";

export default function LanguageSwitch() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button onClick={toggleLanguage}
            className="text-clip transition duration-300 hover:scale-115 cursor-pointer flex text-sm group">
            <MdLanguage size={24} />
            <span className="group-hover:opacity-100 transition duration-300 opacity-0 absolute -top-12 bg-white/20 p-2 rounded-md left-1/2 -translate-x-1/2">{language.toUpperCase()}</span>
        </button>
    )
}