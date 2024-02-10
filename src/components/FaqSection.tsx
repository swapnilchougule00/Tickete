import React from 'react'
import { Button } from './ui/button'
import { AccordianFaqs } from './AccordianFaqs'

function FaqSection() {
    return (
        <div className="w-full flex flex-col-reverse md:flex-row gap-10 pt-14  border-t">
            <div className='md:w-[50%]  space-y-8'>
                <div className=' space-y-2'>
                    <h1 className='text-2xl '>Frequently asked questions</h1>
                    <h1 className='text-[#60646C]'>Here are some of our most asked questions.</h1>
                </div>

                <div className='bg-[#F9F9FB] gap-4 md:w-[80%] w-full flex rounded-lg p-6'>
                    <div>
                        <h1 className='text-lg '>Still need help? We’re here for you.</h1>
                        <Button className='bg-black mt-4 rounded-lg px-6'>Chat with us</Button>
                    </div>
                    <img className='w-40' alt='logo' src={'https://assets.tickete.co/assets/trust-element/support.svg?auto=format&fm=webp&fit=crop&w=423&h=270&q=60'}/>
                </div>
            </div>
            <div className='md:w-[50%] '>
                <AccordianFaqs/>
            </div>
        </div>
    )
}

export default FaqSection
