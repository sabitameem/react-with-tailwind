import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-5 p-5 rounded-lg flex flex-col'>
            <h2 className='text-center'>
            <span  className='text-5xl font-extrabold text-purple-700 text-center'>{price.price}</span>
            <span className='text-xl font-semibold text-white text-center'>$ USD</span>
            </h2>

            <h2 className='text-2xl font-bold my-4 text-center'>{price.name}</h2>
            <p className='font-bold text-white underline'>Features :</p>
            {
                price.features.map((feature,idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature> )
            }
            <button className='w-full mt-auto bg-purple-400 hover:bg-purple-800 py-2 rounded-lg text-white font-bold'>Buy Now</button>
            
        </div>
    );
};

export default PriceCard;