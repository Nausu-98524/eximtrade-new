'use client'

import { Marquee } from "@/components/magicui/marquee";

const Clients = () => {
    return (
        <div>
            <section className='py-20 dotbg px-10'>
                <div className="container px-3 md:px-0 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div>
                            <h4 className="text-black font-semibold text-center text-base bg-emerald-50 py-1 px-2 border rounded-full inline-block">✨Our Clients</h4>
                            <h3 className="mx-auto mb-5 text-balance text-4xl font-bold text-black my-5">Trusted By Top Brands</h3>
                            <p className='text-base text-gray-700 text-justify'>We are privileged to work with some of the most prestigious clients in the industry. Our vision is to deliver fast, prompt & reliable information to our clients that adds value to their business.</p>
                        </div>
                        <div>
                            <div className="relative">
                                <Marquee pauseOnHover className="[--duration:20s]">
                                    <div className="p-3 bg-white border shadow w-[180px] rounded-2xl h-[100px] flex justify-center items-center">
                                        <img className="w-[150px] object-contain" src="./images/clients/bcg.png" alt="" />
                                    </div>
                                    <div className="p-3 bg-white border shadow w-[180px] rounded-2xl h-[100px] flex justify-center items-center">
                                        <img className="w-[150px] object-contain" src="./images/clients/absolute-advantage_logo.png" alt="" />
                                    </div>
                                    <div className="p-3 bg-white border shadow w-[180px] rounded-2xl h-[100px] flex justify-center items-center">
                                        <img className="w-[150px] object-contain" src="./images/clients/afepasa.png" alt="" />
                                    </div>
                                    <div className="p-3 bg-white border shadow w-[180px] rounded-2xl h-[100px] flex justify-center items-center">
                                        <img className="w-[150px] object-contain" src="./images/clients/lonza.png" alt="" />
                                    </div>
                                    <div className="p-3 bg-white border shadow w-[180px] rounded-2xl h-[100px] flex justify-center items-center">
                                        <img className="w-[150px] object-contain" src="./images/clients/neohealth.png" alt="" />
                                    </div>
                                    <div className="p-3 bg-white border shadow w-[180px] rounded-2xl h-[100px] flex justify-center items-center">
                                        <img className="w-[150px] object-contain" src="./images/clients/duracell.png" alt="" />
                                    </div>
                                </Marquee>
                                <Marquee reverse pauseOnHover className="[--duration:20s]">
                                    <div className="p-3 bg-white border shadow w-[180px] rounded-2xl h-[100px] flex justify-center items-center">
                                        <img className="w-[150px] object-contain" src="./images/clients/bcg.png" alt="" />
                                    </div>
                                    <div className="p-3 bg-white border shadow w-[180px] rounded-2xl h-[100px] flex justify-center items-center">
                                        <img className="w-[150px] object-contain" src="./images/clients/absolute-advantage_logo.png" alt="" />
                                    </div>
                                    <div className="p-3 bg-white border shadow w-[180px] rounded-2xl h-[100px] flex justify-center items-center">
                                        <img className="w-[150px] object-contain" src="./images/clients/afepasa.png" alt="" />
                                    </div>
                                    <div className="p-3 bg-white border shadow w-[180px] rounded-2xl h-[100px] flex justify-center items-center">
                                        <img className="w-[150px] object-contain" src="./images/clients/lonza.png" alt="" />
                                    </div>
                                    <div className="p-3 bg-white border shadow w-[180px] rounded-2xl h-[100px] flex justify-center items-center">
                                        <img className="w-[150px] object-contain" src="./images/clients/neohealth.png" alt="" />
                                    </div>
                                    <div className="p-3 bg-white border shadow w-[180px] rounded-2xl h-[100px] flex justify-center items-center">
                                        <img className="w-[150px] object-contain" src="./images/clients/duracell.png" alt="" />
                                    </div>
                                </Marquee>
                                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients
