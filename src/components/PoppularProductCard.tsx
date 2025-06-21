import React from 'react'

type Product4Card = {
    imgURL: string,
    name: string,
    price: string,

};

type PoppularProductCardProps = {
    product: Product4Card;
};

const PoppularProductCard = ({ product }: PoppularProductCardProps) => {
    return (
        <div className='flex flex-1 flex-col w-full"'>
            <img src={product.imgURL} alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4" />

            <div className='mt-8 flex justify-start gar-3'>
                <img src="/icons/star.svg" alt="rating" width={24} height={24}
                    className='w-6 h-6 text-coral-red' />
                <p className='ml-2 font-montserrat text-xl text-slate-500 leading-normal'>3.4</p>
            </div>
            <h3 className='mt-3 leading-normal font-semibold font-palanquin text-2xl'> {product.name}</h3>
            <p className='mt-2 font-montserrat font-semibold text-coral-red'>{product.price}</p>

        </div>
    )
}

export default PoppularProductCard

