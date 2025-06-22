"use client"

import Button from "@/components/Button"
import { shoes, statistics } from "@/constants"
import ShoeCard from "@/components/ShoeCard";
import { useState } from "react";

const Hero = () => {

  const [bigShowImage, setBigShowImage] = useState("/images/big-shoe1.png");

  const changeBigShoeImage = (image: string) => {
    setBigShowImage(image);
  }
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relativ xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin  text-8xl"><span>The new Arrival</span><br />
          <span className="text-coral-red inline-block">Heatwave</span> Shoes
        </h1>
        <p className="text-lg text-slate-500  mb-10 mt-8">Your one-stop shop for the latest sneaker trends.</p>

        <Button label="Shop Now" iconUrl="/icons/arrow-right.svg" />

        <div className="flex justify-start items-starts flex-wrap w-full mt-8 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-palanquin font-bold">{stat.label}</p>
              <p className="text-lg text-slate-500 leading-7">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex justify-center items-center bg-gray rounde-xl">
        <img
          src={bigShowImage}
          width={610}
          height={500}
          alt="big-shoe1 Image"
          className="object-contain relative z-10 xl:w-[610px] xl:h-[500px] w-full h-full max-xl:padding-x"
        />


        <div className="flex gap-10 absolute bottom-0 translate-y-[50px] sm:translate-y-[150px] max-sm:translate-y-[100px] xl:translate-y-[50px]">

          {shoes.map((shoe) => (
            <div key={shoe.bigShoe} className="">
              <ShoeCard thumbnail={shoe.thumbnail}
                bigShowImageShoe={shoe.bigShoe}
                bigShowImageAnzeige={bigShowImage}
                changeBigShoeImage={changeBigShoeImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero