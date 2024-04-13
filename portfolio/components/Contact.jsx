'use client'

import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
        // Clear the form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div id='contact' className='w-full lg:h-screen py-4'>
            <div className='max-w-[1240px] mx-auto px-2 py-16 min-w-full'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='uppercase text-2xl tracking-widest p-4 font-bold text-gray-500'>Contact</p>
                    <h2 className='py-2'>Get In Touch</h2>
                </div>
                <div className='bg-gray-500 w-[75%] md:w-[60%] lg:w-[45%]  m-auto p-8 rounded-lg'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label htmlFor='name' className='block text-white mb-1'>Name</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                className='w-full p-2 bg-[#ecf0f3] rounded-lg'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='email' className='block text-white mb-1'>Email</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                className='w-full p-2 bg-[#ecf0f3] rounded-lg'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='message' className='block text-white mb-1'>Message</label>
                            <textarea
                                id='message'
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                className='w-full p-2 bg-[#ecf0f3] rounded-lg h-32 resize-none'
                                required
                            ></textarea>
                        </div>
                        <button
                            type='submit'
                            className='text-white w-full px-4 py-2 rounded-full bg-gray-800 hover:scale-105 ease-in duration-300'
                        >
                            Send
                        </button>
                    </form>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/#home'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp
                                className='text-[#5651e5]'
                                size={30}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact