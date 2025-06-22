import Button from '@/components/Button'
import React from 'react'

const Subscribe = () => {
  return (
    <section className='max-container flex justfiy-between items-center max-lg:flex-col
    gap-19 id="Subscribe"'>
      <h3 className='text-4xl font-palanquin leading-[68px]'>Sign Up for <span className='text-coral-red'>Updates</span>
      {" "} & Newsletter
      </h3>
     <div className='w-full flex gap-10 mt-10'>
      <input type="email" placeholder='Enter your email address' className='input border 
      font-montserrat rounded-full'/>
      <Button label={'Sign Up'} iconUrl={''} />
     </div>
    </section>
  )
}

export default Subscribe