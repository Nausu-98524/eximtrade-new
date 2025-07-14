'use client'
import Link from 'next/link'
import Breadcrump from '../../common/Breadcrump'
import { RainbowButton } from '@/components/magicui/rainbow-button'
import { MapPinned, MousePointerClickIcon } from 'lucide-react'

const Contact = () => {
    return (
        <>
            <Breadcrump pageName='Contact' heading='Contact Us' />

            <section className='py-20'>
                <div className="container mx-auto px-4 md:px-0">
                    <div className="grid md:grid-cols-3 gap-5">
                        <div>
                            <h3 className="mx-auto mb-2 text-balance text-2xl font-bold leading-snug tracking-normal">Information</h3>
                            <div className="px-4 py-5 bg-gray-100 rounded-4xl flex gap-3 mb-3">
                                <div>
                                    <div className="p-3 rounded-full w-[75px] h-[75px] inline-flex items-center justify-center bg-emerald-600 mb-4">
                                        <MapPinned className='size-12 text-white' />
                                    </div>
                                </div>
                                <div>
                                    <h6 className='font-bold text-lg'>Shpere Eximia Research Pvt Ltd</h6>
                                    <p className='text-base text-gray-700'>G-232 , Noida Sector-63, Uttar Pradesh - 201301, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <h3 className="mx-auto mb-2 text-balance text-2xl font-bold leading-snug tracking-normal">Send a Message</h3>
                            <div className="p-10 bg-gray-100 rounded-4xl">
                                <div className="flex gap-2 items-center mb-3">
                                    <div className='md:w-2/4'>
                                        <label className='mb-2 block' htmlFor="">Full Name<span className='text-red-600'>*</span></label>
                                        <input type="text" id="name" className="focus:outline-none bg-white border mb-3 md:mb-0 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your Name" required />
                                    </div>
                                    <div className='md:w-2/4'>
                                        <label className='mb-2 block' htmlFor="">Email ID<span className='text-red-600'>*</span></label>
                                        <input type="email" id="email" className="bg-white mb-3 md:mb-0 border focus:outline-none border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center mb-3">
                                    <div className='md:w-2/4'>
                                        <label className='mb-2 block' htmlFor="">Company Name<span className='text-red-600'>*</span></label>
                                        <input type="text" id="company" className="focus:outline-none bg-white border mb-3 md:mb-0 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your Company Name" required />
                                    </div>
                                    <div className='md:w-2/4'>
                                        <label className='mb-2 block' htmlFor="">Mobile Number<span className='text-red-600'>*</span></label>
                                        <input type="Number" id="Number" className="remove-arrow bg-white mb-3 md:mb-0 border focus:outline-none border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="xxxxx-xxxxx" required />
                                    </div>
                                </div>
                                <div>
                                    <label className='mb-2 block' htmlFor="">Select Country<span className='text-red-600'>*</span></label>
                                    <select id="countries" className="bg-white border border-gray-300 mb-3 focus:outline-none text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">

                                        <option value="0">Select Country</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="India">India</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Russia">Russia</option>
                                        <option value="sri_lanka">Sri Lanka</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Chile">Chile</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="costarica">CostaRica</option>
                                        <option value="drcongo">DR Congo</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Moldova">Moldova</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="australia">Australia</option>
                                        <option value="Spain">Spain</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Netherland">Netherland</option>
                                        <option value="Germany">Germany</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Canada">Canada</option>
                                        <option value="China">China</option>
                                        <option value="USA">USA</option>
                                    </select>
                                </div>
                                <div className='w-full mb-4'>
                                    <label className='mb-2 block' htmlFor="">Message<span className='text-red-600'>*</span></label>
                                    <textarea type="Number" id="Number" className="remove-arrow bg-white mb-3 md:mb-0 border focus:outline-none border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Type a message" required />
                                </div>
                                <RainbowButton className="rounded-full h-10 bg-blue-900 font-bold text-base px-8">Submit <MousePointerClickIcon /> </RainbowButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
