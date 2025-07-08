'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { SearchCodeIcon } from 'lucide-react';


const  Searchdata=()=>{
    const [dropActive, setDropActive] = useState(false)

    const countries = [
        {
            CountryName: 'Bangladesh',
            countryFlag: 'bd'
        },
        {
            CountryName: 'India',
            countryFlag: 'in'
        },
        {
            CountryName: 'Brazil',
            countryFlag: 'br'
        },
        {
            CountryName: 'Indonesia',
            countryFlag: 'id'
        },
        {
            CountryName: 'Mexico',
            countryFlag: 'mx'
        },
        {
            CountryName: 'Pakistan',
            countryFlag: 'pk'
        },
        {
            CountryName: 'Philippines',
            countryFlag: 'ph'
        },
        {
            CountryName: 'Russia',
            countryFlag: 'ru'
        },
        {
            CountryName: 'Sri Lanka',
            countryFlag: 'sl'
        },
        {
            CountryName: 'Tanzania',
            countryFlag: 'in'
        },
        {
            CountryName: 'Turkey',
            countryFlag: 'in'
        },
        {
            CountryName: 'Vietnam',
            countryFlag: 'in'
        },
        {
            CountryName: 'Argentina',
            countryFlag: 'in'
        },
        {
            CountryName: 'Bolivia',
            countryFlag: 'in'
        },
        {
            CountryName: 'Botswana',
            countryFlag: 'in'
        },
        {
            CountryName: 'Chile',
            countryFlag: 'in'
        },
        {
            CountryName: 'Nigeria',
            countryFlag: 'in'
        },
        {
            CountryName: 'Colombia',
            countryFlag: 'in'
        },
        {
            CountryName: 'CostaRica',
            countryFlag: 'in'
        },
        {
            CountryName: 'DR Congo',
            countryFlag: 'in'
        },
        {
            CountryName: 'Kazakhstan',
            countryFlag: 'in'
        },
        {
            CountryName: 'Kenya',
            countryFlag: 'in'
        },
        {
            CountryName: 'Moldova',
            countryFlag: 'in'
        },
        {
            CountryName: 'Uganda',
            countryFlag: 'in'
        },
        {
            CountryName: 'Ukraine',
            countryFlag: 'in'
        },
        {
            CountryName: 'Uzbekistan',
            countryFlag: 'in'
        },
        {
            CountryName: 'Australia',
            countryFlag: 'in'
        },
        {
            CountryName: 'Spain',
            countryFlag: 'in'
        },
        {
            CountryName: 'United Kingdom',
            countryFlag: 'in'
        },
        {
            CountryName: 'Netherland',
            countryFlag: 'in'
        },
        {
            CountryName: 'Germany',
            countryFlag: 'in'
        },
        {
            CountryName: 'United Arab Emirates',
            countryFlag: 'in'
        },
        {
            CountryName: 'Saudi Arabia',
            countryFlag: 'in'
        },
        {
            CountryName: 'Oman',
            countryFlag: 'in'
        },
        {
            CountryName: 'Singapore',
            countryFlag: 'in'
        },
        {
            CountryName: 'Canada',
            countryFlag: 'in'
        },
        {
            CountryName: 'China',
            countryFlag: 'in'
        },
        {
            CountryName: 'USA',
            countryFlag: 'in'
        },
    ]

    return (
        <>
            <div className="px-4 bg-white relative  rounded-xl md:flex items-center justify-center mx-auto gap-2 md:max-w-screen-md lg:max-w-screen-lg border shadow-2xl py-8">
                <div className='md:w-2/4'>
                    <input type="email" id="email" className="shadow-sm focus:outline-none bg-gray-50 border mb-3 md:mb-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter Products" required />
                </div>
                <div className='md:w-2/4'>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 mb-3 md:mb-0 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Hs Code" required />
                </div>
                <div className="md:w-2/4">
                    <div className="shadow-sm bg-gray-50 mb-3 md:mb-0 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 flex items-center justify-between cursor-pointer" onClick={()=> setDropActive(!dropActive)}>
                        <span>Select Country</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-chevron-right ml-1 ${dropActive?'rotate-90' : ''} size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1`}><path d="m9 18 6-6-6-6"></path></svg>
                    </div>
                    <div className={`absolute w-full shadow-xl border rounded-xl p-3 left-0 bg-white mt-3 top-full z-50 max-h-96 overflow-y-auto ${dropActive ? 'fadetop' : 'hidden '}`}>
                        <div className="grid grid-cols-4 gap-2">
                            {countries.map((item, index) =>
                                <Link key={index} href={item.pageURL || "#"} className={`card group relative shadow-sm bg-zinc-100 rounded-md p-1 flex items-center gap-2 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold`}>
                                    <div className='block'>
                                        <span className={`fi fi-${item.countryFlag} block text-lg`}></span>
                                    </div>
                                    <div>
                                        <h6 className='text-sm font-medium truncate uppercase group-hover:text-indigo-700 ease-linear'>{item.CountryName}</h6>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <select id="countries" className="bg-gray-50 border border-gray-300 mb-3 md:mb-0 focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-2/4 p-2.5 ">
                    <option>Import</option>
                    <option>Export</option>
                </select>
                <Link href="#">
                     <RainbowButton className="rounded-full h-10 bg-blue-900 font-bold">Search <SearchCodeIcon/></RainbowButton>
                </Link>
            </div>
        </>
    )
}


export default Searchdata