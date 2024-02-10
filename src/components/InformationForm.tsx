"use client"

import { InfoIcon } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'

function InformationForm() {
    return (
        <div className='w-full'>

            <h1 className='font-serif  text-5xl'>Confirm & Pay</h1>

            <div className='p-4 mt-10 relative space-y-1 border border-slate-200 rounded-lg'>
                <h1 className='text-sm font-semibold'>Free Cancellation</h1>
                <h1 className='text-sm text-[#60646C] '>Tickets can be cancelled by 13th February, 2022.</h1>
                <InfoIcon className='w-4 absolute top-2 text-white right-4' fill='#60646C' />
            </div>

            <div className='mt-10 space-y-2'>
                <h1 className='text-2xl '>Enter your details</h1>
                <h1 className='text-[#60646C]'>We'll be sending your tickets to the details below. Booking for a friend? Add their details.</h1>
            </div>

            <form action="#" className='py-10 border-b  space-y-5'>
                <Input className='outline-none ' placeholder='Full Name *' required></Input>
                <div className='flex gap-4'>
                    <Input placeholder='Country Code'></Input>
                    <Input placeholder='Phone No'></Input>
                </div>
                <div className='flex gap-4'>
                    <Input placeholder='Email*'></Input>
                    <Input placeholder='Confirm Email'></Input>
                </div>
            </form>
            
            <div className='mt-10 space-y-2'>
                <h1 className='text-2xl '>Additional Information</h1>
                <h1 className='text-[#60646C]'>We need a few more details to complete your reservation.</h1>
            </div>

            <form action="#" className='py-10 border-b  space-y-5'>
                <div className='flex gap-4'>
                    <Input placeholder='Input Lable'></Input>
                    <Input placeholder='Select'></Input>
                </div>
                <Input className='outline-none ' placeholder='Multiselect' required></Input>
            </form>

        </div>
    )
}

export default InformationForm
