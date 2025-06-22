import { Service4Card } from '@/constants/EigeneTypes';
import React from 'react'

type Service4CardProps = {
    service: Service4Card;
};

const ServiceCard: React.FC<Service4CardProps> = ({ service }) => {
  return (
    <div className='flex-1 sm:w-[360px] w-full shadow-3xl px-10 py-10 rounded-[20px]'>
      <img src={service.imgURL} alt={service.label} 
      className='w-11 h-11 justify-center items-center bg-coral-red mt-3 mb-3 rounded-full'/>
      <h3 className='font-bold text-lg mt-4 font-planquin'>{service.label}</h3>
      <p className='text-slate-500 mt-2 font-montserrat'>{service.subtext}</p>
    </div>
  )
}

export default ServiceCard