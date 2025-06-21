"use client";

import React from 'react'

type Shoe = {
    thumbnail: string;
    changeBigShoeImage: (image: string) => void;
    bigShowImageShoe: string;
    bigShowImageAnzeige: string;
};

const ShoeCard = ({ thumbnail, changeBigShoeImage,bigShowImageShoe, bigShowImageAnzeige }: Shoe) => {

    const handleClick = () => {
        if(bigShowImageShoe !== bigShowImageAnzeige) {
            changeBigShoeImage(bigShowImageShoe);
        }
    }
    return (
        <div
            className={`border-2 rounded-xl 
                ${bigShowImageShoe === bigShowImageAnzeige ? 'border-gray-400' : 'border-transparent'}
                cursor-pointer hover:border-black transition-colors duration-300 p-2 m-2
            `}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover">
                <img
                    src={thumbnail}
                    alt={thumbnail}
                    width={127}
                    height={103}
                    className="object-fill w-[127px] h-[103px] rounded-xl"
                />       
             </div>
        </div>
    )
}

export default ShoeCard