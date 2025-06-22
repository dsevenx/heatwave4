import { Review4Card } from '@/constants/EigeneTypes';
import React from 'react'

type Review4CardProps = {
    review: Review4Card;
};

const ReviewCard = ({ review }: Review4CardProps) => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <img
                className='rounded-full object-cover w-[120px] h-[120px] mb-4'
                src={review.imgURL} alt={review.customerName} />
            <p className='text-center text-slate-500'>{review.feedback}</p>

            <div className='flex justify-center items-center gap-2 mt-4 mb-2'>
                <img width={24} height={24} 
                className='object-contain'
                src="/icons/star.svg" alt="Star Rating" />
                <p>({review.rating})</p>
            </div>
            <h3 className='mt-1 font-palanquin text-3xl text-center'>{review.customerName}</h3>
        </div>
    )
}

export default ReviewCard