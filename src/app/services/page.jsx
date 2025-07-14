'use client'
import { Safari } from '@/components/magicui/safari'
import Breadcrump from '../../common/Breadcrump'
import { RainbowButton } from '@/components/magicui/rainbow-button'
import { useState } from 'react'

const page = () => {
    const [active, setActive] = useState(0)

    return (
        <>
            <Breadcrump pageName='Services' heading='Services' />

            <section className="py-20 px-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div>
                            <div className="relative">
                                <Safari
                                    url="magicui.design"
                                    className="size-full"
                                    imageSrc="./images/our_services.webp"
                                />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-black font-semibold text-center text-base bg-emerald-50 py-1 ps-2 pe-4 border rounded-full inline-block">✨ Services</h4>
                            <h3 className="mx-auto mb-5 text-balance text-4xl font-bold text-black my-5">Import Export Data Analysis</h3>
                            <p className='text-base text-gray-700 text-justify'>Discover business opportunities from the global market with the world's leading import export data Analysis company, Exim Trade Data. We have an efficient business intelligence market platform that tracks the supply chain and shipping activity of all the major shipping companies around the world to provide deep insights into the global export import data for business. Our trade statistics and market access information help you to identify the right suppliers and connect with potential sales prospects.</p>
                            <RainbowButton className="rounded-full h-10 bg-blue-900 font-bold text-base px-4 py-2 mt-5">Try Exim GTIS</RainbowButton>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-20 pt-10 mapbg px-10 bg-gray-300">
                <div className="container mx-auto">
                    <div className="">
                        <h3 className="text-black font-semibold text-base bg-emerald-50 py-1 px-2 border rounded-full inline-block">✨ Know More About Services</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 items-center">
                        <div>
                            <div className={`p-6 border-s-4 cursor-pointer  ${active === 0 ? "border-emerald-400 bg-[#0000001c] backdrop-blur-md" : "border-gray-200"}`} onMouseOver={() => setActive(0)} onMouseLeave={() => setActive(0)}>
                                <p className={`text-base ${active === 0 ? "text-black" : "text-gray-700"} text-justify`}>Discover a new marketplace for your import-export trade business with our analytically designed global import export database.</p>
                            </div>
                            <div className={`p-6 border-s-4 cursor-pointer  ${active === 1 ? "border-emerald-400 bg-[#0000001c] backdrop-blur-md" : "border-gray-200"}`} onMouseOver={() => setActive(1)} onMouseLeave={() => setActive(0)}>
                                <p className={`text-base ${active === 1 ? "text-black" : "text-gray-700"} text-justify`}>Find new, potential & active buyers and suppliers for your import-export trade business with our smartly developed tools and data.</p>
                            </div>
                            <div className={`p-6 border-s-4 cursor-pointer  ${active === 2 ? "border-emerald-400 bg-[#0000001c] backdrop-blur-md" : "border-gray-200"}`} onMouseOver={() => setActive(2)} onMouseLeave={() => setActive(0)}>
                                <p className={`text-base ${active === 2 ? "text-black" : "text-gray-700"} text-justify`}>Closely monitor the performance of your products in the global trade markets with the help of our latest and smartly developed tools and keep track of the market competition.</p>
                            </div>
                            <div className={`p-6 border-s-4 cursor-pointer  ${active === 3 ? "border-emerald-400 bg-[#0000001c] backdrop-blur-md" : "border-gray-200"}`} onMouseOver={() => setActive(3)} onMouseLeave={() => setActive(0)}>
                                <p className={`text-base ${active === 3 ? "text-black" : "text-gray-700"} text-justify`}>With our innovative and analytically built big databases, you can have fast access to thousands of millions of worldwide import export trade data to gain real-time insights into the global trade markets.</p>
                            </div>
                        </div>
                        <div className="p-6 rounded-3xl bg-white">
                            <img
                                src={active === 0 ? "./images/analytically.jpg" : 
                                    active === 1 ? "./images/tools.jpg" :
                                    active === 2 ? "./images/moniter.jpg" :
                                    active === 3 ? "./images/global-trade-markets.jpg" : ""
                                }
                                className='w-full rounded-xl'
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
