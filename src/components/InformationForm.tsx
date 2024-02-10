"use client"

import { InfoIcon } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import React from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'

function InformationForm() {
    return (
        <div className='w-full'>

            <h1 className='font-serif hidden md:block text-5xl'>Confirm & Pay</h1>

            <div className='p-4 md:mt-10 mt-5 relative space-y-1 border border-slate-200 rounded-lg'>
                <h1 className='text-sm font-semibold'>Free Cancellation</h1>
                <h1 className='text-sm text-[#60646C] '>Tickets can be cancelled by 13th December, 2022.</h1>
                <InfoIcon className='w-4 absolute top-2 text-white right-4' fill='#60646C' />
            </div>

            <div className='mt-10 space-y-2'>
                <h1 className='text-2xl '>Enter your details</h1>
                <h1 className='text-[#60646C]'>We'll be sending your tickets to the details below. Booking for a friend? Add their details.</h1>
            </div>

            <form action="#" className='py-10 border-b  space-y-5'>
                <Label htmlFor='name'>Email <span className='!text-red-500'>*</span></Label>
                <Input className='outline-none ' id='name' placeholder='Full Name' required></Input>
                <div className='md:flex space-y-5 md:space-y-0  gap-4'>
                    <Select>
                        <SelectTrigger className="text-[#60646C]">
                            <SelectValue placeholder="Country code" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">+91 Ind</SelectItem>
                            <SelectItem value="dark">US</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input placeholder='Phone No'></Input>
                </div>
                <div className='md:flex md:space-y-0  space-y-5 gap-4'>
                    <Input placeholder='Email*'></Input>
                    <Input placeholder='Confirm Email'></Input>
                </div>
            </form>

            <div className='mt-10 space-y-2'>
                <h1 className='text-2xl '>Additional Information</h1>
                <h1 className='text-[#60646C]'>We need a few more details to complete your reservation.</h1>
            </div>

            <form action="#" className='py-10 border-b  space-y-5'>
                <div className='md:flex md:space-y-0  space-y-5 gap-4'>
                    <Input placeholder='Input Lable'></Input>
                    <Select>
                        <SelectTrigger className="text-[#60646C]">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">1</SelectItem>
                            <SelectItem value="dark">2</SelectItem>
                            <SelectItem value="system">3</SelectItem>
                        </SelectContent>
                    </Select>

                </div>


                <Select>
                    <SelectTrigger className="text-[#60646C]">
                        <SelectValue placeholder="Multielect" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">1</SelectItem>
                        <SelectItem value="dark">2</SelectItem>
                        <SelectItem value="system">3</SelectItem>
                    </SelectContent>
                </Select>
            </form>

        </div>
    )
}

export default InformationForm
