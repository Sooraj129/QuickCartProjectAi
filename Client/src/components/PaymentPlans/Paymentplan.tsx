import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const Paymentplan : React.FC = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-30'>
        <div className='text-center'>
            <h2 className='text-slate-700 text-[42px]'>Choose Your Plans</h2>
            <p className='text-gray-500 max-w-lg-mx-auto'>Start your Free or Premium plan now</p>
        </div>
        <div className='mt-14 mex-sm:mx-8'>
            <PricingTable/>

        </div>
    </div>
  )
}

export default Paymentplan