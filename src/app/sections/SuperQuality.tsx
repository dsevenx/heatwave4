import Button from '@/components/Button'
import React from 'react'

const SuperQuality = () => {
  return (
    <section id="SuperQuality" className="w-full flex justify-between items-center
     max-lg:flex-col gap-10 max-container">

      <div className='flex flex-1 flex-col'>
        <h2 className="mt-10 font-palanquin text-4xl"><span>We provide you</span><br />
          <span className="text-coral-red inline-block">Super Quality</span> Shoes
        </h2>
        <p className="text-lg text-slate-500 mb-10 info-text mt-10">Ensuring
          premium comfort and styleYour one-stop shop for the latest sneaker trends.</p>
        <p className="text-lg text-slate-500 mb-10 info-text">Our dedication todetail and excellence ensures your satisfaction.</p>
        <div className='mt-1'>
          <Button label="View Details" iconUrl="" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center mt-10">
        <img src="/images/shoe8.svg" alt="Super Quality Shoes"
          className="w-full max-w-md h-auto" />
      </div>
    </section>
  )
}

export default SuperQuality