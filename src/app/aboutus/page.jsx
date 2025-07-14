'use client'

import { Safari } from '@/components/magicui/safari'
import Breadcrump from '../../common/Breadcrump'
import { BarChartHorizontalBigIcon, ListTodoIcon, ParkingMeter, Server } from 'lucide-react'
import Clients from '@/common/Clients'
import Testimonials from '@/common/Testimonials'


const Aboutus = () => {
    return (
        <>
            <Breadcrump pageName='About Us' heading='About Us' />

            <section className="py-20 px-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div>
                            <div className="relative">
                                <Safari
                                    url="magicui.design"
                                    className="size-full"
                                    imageSrc="./images/about_us.webp"
                                />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-black font-semibold text-center text-base bg-emerald-50 py-1 px-2 border rounded-full inline-block">✨Overview</h4>
                            <h3 className="mx-auto mb-5 text-balance text-4xl font-bold text-black my-5">Why Exim Trade Data</h3>
                            <p className='text-base text-gray-700 text-justify'>Exim trade data analysis helps you to provide global export and import trade analysis. Exim Trade data was founded to resolve all your export-import business operation. We have come up with a modern infrastructure setup that provides more accurate and custom-made data analysis solutions. Our highly professional technical team has more than decades of expertise in data mining and data processing.</p>
                            <p className='text-base text-gray-700 text-justify'>We are capable of delivering the most accurate systematic global export-import statistics that help you to analyze ongoing trade inflow and suitable demand positions across India and around the globe.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 mapbg px-10">
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-black font-semibold text-center text-base bg-emerald-50 py-1 ps-2 pe-4 border rounded-full inline-block">✨ Benefits</h3>
                        <h2 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug my-2">Benefits of Import Export Data Analysis</h2>
                    </div>
                    <div className="mt-15 mb-10 grid grid-col-2 md:grid-cols-4 gap-4">
                        <div className="text-center ">
                            <div className="p-3 rounded-full w-[75px] h-[75px] inline-flex items-center justify-center bg-emerald-600 mb-4">
                                <ParkingMeter className='size-12 text-white' />
                            </div>
                            <p className="text-base font-normal text-gray-600 mb-3">Accelerate your export-import trade by data-analysis-based decision & avoid risk.</p>
                        </div>
                        <div className="text-center ">
                            <div className="p-3 rounded-full w-[75px] h-[75px] inline-flex items-center justify-center bg-emerald-600 mb-4">
                                <ListTodoIcon className='size-12 text-white' />
                            </div>
                            <p className="text-base font-normal text-gray-600 mb-3">Align your business model with global strategic planning & stay ahead.</p>
                        </div>
                        <div className="text-center ">
                            <div className="p-3 rounded-full w-[75px] h-[75px] inline-flex items-center justify-center bg-emerald-600 mb-4">
                                <BarChartHorizontalBigIcon className='size-12 text-white' />
                            </div>
                            <p className="text-base font-normal text-gray-600 mb-3">Monitor and track competition & Grab the upcoming business opportunity.</p>
                        </div>
                        <div className="text-center ">
                            <div className="p-3 rounded-full w-[75px] h-[75px] inline-flex items-center justify-center bg-emerald-600 mb-4">
                                <Server className='size-12 text-white' />
                            </div>
                            <p className="text-base font-normal text-gray-600 mb-3">Exim trade data is equipped with the latest business intelligence tools for data analysis visualization to uncover hidden possibilities that are locked in the data analysis.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 relative">
                <div className="container mx-auto">
                    <h2 className="mx-auto mb-5 text-center text-balance text-4xl font-bold leading-snug my-2">Our Code of Conduct</h2>
                    <div className="max-w-7xl p-6 rounded-3xl bg-gray-50 mx-auto border-t-2 border-emerald-500 sticky top-32 mb-10">
                        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-5">
                            <div>
                                <img src="./images/code_of_conduct.svg" className="w-10/12" alt="" />
                            </div>
                            <div>
                                <p className="text-base font-normal text-gray-600 text-justify mb-3">Exim trade data is highly specialized in providing <b>export-import data analysis services</b> and serves the highest aspiration of the customer and their business requirement.</p>
                                <p className="text-base font-normal text-gray-600 text-justify mb-3">Our primary objective is to meet the expectation set by our customers. To ensure trust and confidence, we strongly believe in maintaining a fair and transparent process in all matters that may affect the interest of our customers.</p>
                                <p className="text-base font-normal text-gray-600 text-justify mb-3"><b>Exim trade data</b> leave no stone unturned in carrying out data analysis research and data analysis mining to prove their authentic code of conduct.</p>
                                <p className="text-lg font-bold text-emerald-600 text-justify mb-3">“Honesty is integrated in the soul of our company value and professional conduct.“</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Clients />

            
            <Testimonials />
        </>
    )
}

export default Aboutus