import React from 'react'

interface ButtonProps {
  label: string;
  iconUrl: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

const Button: React.FC<ButtonProps> = ({ label, iconUrl, backgroundColor, textColor, borderColor }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border 
      font-montserrat rounded-full 
      ${backgroundColor ? backgroundColor : "bg-black"}
      ${textColor ? textColor : "text-white"}
      ${borderColor ? borderColor : "border-transparent"}
     hover:bg-white hover:text-black transition-colors duration-300`}>
      {label}
      {iconUrl &&
        <img src={iconUrl} alt="Button Icon" className="ml-2 rounded-full w-5 h-5" />
      }
    </button>
  )
}

export default Button