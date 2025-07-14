'use client'
import Link from 'next/link'
import Globesvg from './Globesvg'
import { ChevronRight } from 'lucide-react'


const Breadcrump = ({ pageName, subPage, heading }) => {
    return (
        <>
            <section className="flex items-center overflow-hidden relative bg-emerald-50 bg-opacity-50 z-10">
                <div className='absolute top-0 right-0 w-full h-full z-10 opacity-20 flex justify-end items-center'>
                    <Globesvg />
                </div>
                <div className="py-8 mx-auto container px-3 lg:py-24 z-10 relative">
                    <h1 className="mb-2 text-2xl font-bold tracking-normal leading-snug md:text-3xl lg:text-5xl text-blue-800">{heading}</h1>
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                                    Home
                                </Link>
                            </li>
                            {subPage ?
                                <li>
                                    <div className="flex items-center">
                                        <Link href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2">{subPage}</Link>
                                    </div>
                                </li> : ''}
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <ChevronRight />
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">{pageName}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Breadcrump
