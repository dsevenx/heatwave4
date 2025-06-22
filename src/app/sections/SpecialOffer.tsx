import Button from '@/components/Button'
import React from 'react'

const SpecialOffer = () => {
  return (
    <section id="SpecialOffer" className="flex justify-wrap items-center gap-10 max-container">

      <div className='flex flex-1 flex-col'>
        <h2 className="mt-10 font-palanquin text-4xl">
          <span className="text-coral-red inline-block">Special</span> Offers
        </h2>
        <p className="text-lg text-slate-500 mb-10 info-text mt-10">Ensuring
          premium comfort and style, our meticulously crafted heatwave-footwear is designed to elevate your experience.</p>
        <p className="text-lg text-slate-500 mb-10 info-text">Our dedication todetail and excellence ensures your satisfaction.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="Shop Now" iconUrl="/icons/arrow-right.svg" />
          <Button label="Learn More" iconUrl="" 
          backgroundColor={"bg-transparent"} textColor={"text-black"} borderColor={"border-black"} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center mt-10">
        <img src="/images/offer.svg" alt="SpecialOffer"
          width={773} height={687}
          className="w-full object-contain" />
      </div>
    </section>
  )
}


export default SpecialOffer