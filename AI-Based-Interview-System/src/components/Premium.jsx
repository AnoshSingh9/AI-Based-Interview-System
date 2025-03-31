import React from 'react';
import { premiumFeatures } from '../constants';
import { check_li_style } from '../constants';
import { cross_li_style } from '../constants';

const Premium = () => {
    const GenFeatures = ({free}) => {
        return (
            <ul className='grid content-start justify-center md:text-3xl'>
                {premiumFeatures.map(({ id, name, free_name }) => (
                    <li key={id} className="m-4">
                        <i className={`${free ? (id == 0 ? check_li_style : cross_li_style) : check_li_style} text-4xl px-2 font-semibold`}></i>
                        {free ? free_name : name}
                    </li>
                ))}
            </ul>
        )
    }
    return (
        <div className='h-full '>

            <div className='w-full h-full flex flex-col md:flex-row content-center justify-center gap-9 mt-20 p-6 lg:p-0'>
                <div className='w-full md:w-1/3 border-2 border-white text-white rounded-2xl md:p-5 py-5'>
                    <h1 className='text-center text-3xl md:text-5xl font-semibold pt-5 text-white mb-3'>Free  <span className='md:text-3xl text-2xl'> $0.00/month </span></h1>
                    {/* <ul className='grid content-start justify-center md:text-3xl'>
                        <li className='m-4 '>3 Interviews/Month </li>
                        <li className='m-4 '>Detailed Analysis</li>
                        <li className='m-4 '>No Time Boundation</li>
                        <li className='m-4 '>Proper Resume Analysis</li>
                        <li className='m-4 '>No Ads</li>
                        <li className='m-4 '>Verbal Communication Analysis</li>
                        <li className='m-4 '>24X7 Coustomer Care Support</li>
                    </ul> */}
                    <GenFeatures free={true}/>
                </div>
                <div className=' w-full md:w-1/3 border-2 border-white text-white rounded-2xl p-5 py-5'>
                    <h1 className='text-3xl md:text-5xl font-semibold pt-5 mb-3 text-center'>Premium <span className='md:text-3xl text-2xl'> $24.00/month </span></h1>
                    
                    <GenFeatures/>
                </div>
            </div>
        </div>
    );
}

export default Premium;