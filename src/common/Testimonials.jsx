'use client'

import { Star, Triangle } from "lucide-react";
import Slider from "react-slick"

const Testimonials = () => {

    var testimonials = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div>
            <section className="pb-20 pt-10 px-10">
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center items-center mb-10">
                        <h3 className="text-black font-semibold text-center text-base bg-emerald-50 py-1 px-2 border rounded-full inline-block">✨ Testimonials</h3>
                        <h2 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug my-2">Our Client’s Testimonials</h2>
                        <p className='text-base text-gray-700 text-center max-w-5xl mx-auto'>We are known to deliver quality services to our clients. See what they are saying?</p>
                    </div>
                    <Slider {...testimonials}>
                        <div>
                            <div>
                                <div className="p-4 rounded-2xl relative bg-gray-100">
                                    <h6 className="text-lg text-pink-800 capitalize font-bold">excellent customer service</h6>
                                    <p className='text-base text-gray-700 mx-auto'>We've been using Exim Trade Data for updated Global import-export data, and the experience has been outstanding. Their data is accurate and up-to-date, which has significantly improved our decision-making. The team is professional, responsive, and always ready to assist with any queries. I highly recommend Exim Trade Data for reliable import export data and <b className="text-pink-800">excellent customer service</b>.</p>
                                    <Triangle className="absolute fill-gray-100 rotate-90 -left-0.5 text-transparent -bottom-3" />
                                </div>
                                <div className="flex mt-3 gap-5 items-center">
                                    <div className="w-14 h-14 rounded-full bg-pink-800 flex justify-center items-center">
                                        <h6 className="text-2xl font-semibold text-white">D</h6>
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-semibold text-black">Divya Varshney</h5>
                                        <div className="flex gap-1">
                                            <Star className="fill-orange-400 text-orange-400" size={15} />
                                            <Star className="fill-orange-400 text-orange-400" size={15} />
                                            <Star className="fill-orange-400 text-orange-400" size={15} />
                                            <Star className="fill-orange-400 text-orange-400" size={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="p-4 rounded-2xl relative bg-gray-100">
                                    <h6 className="text-lg text-yellow-500 capitalize font-bold">very professional</h6>
                                    <p className='text-base text-gray-700 mx-auto'>I recently approached Exim Trade Data for global import export data related to electronic products for my business. They were <b className="text-yellow-500">very professional</b> in their approach and swiftly provided the required data in a short span of time. I had a good experience getting service from them.I will surely approach them in the future as well.</p>
                                    <Triangle className="absolute fill-gray-100 rotate-90 -left-0.5 text-transparent -bottom-3" />
                                </div>
                                <div className="flex mt-3 gap-5 items-center">
                                    <div className="w-14 h-14 rounded-full bg-yellow-500 flex justify-center items-center">
                                        <h6 className="text-2xl font-semibold text-white">H</h6>
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-semibold text-black">Harshit Saxena</h5>
                                        <div className="flex gap-1">
                                            <Star className="fill-orange-400 text-orange-400" size={15} />
                                            <Star className="fill-orange-400 text-orange-400" size={15} />
                                            <Star className="fill-orange-400 text-orange-400" size={15} />
                                            <Star className="fill-orange-400 text-orange-400" size={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="p-4 rounded-2xl relative bg-gray-100">
                                    <h6 className="text-lg text-sky-600 capitalize font-bold">outstanding</h6>
                                    <p className='text-base text-gray-700 mx-auto'>We've been using Exim Trade Data for updated Global import-export data, and the experience has been <b className="text-sky-600">outstanding</b>. Their data is accurate and up-to-date, which has significantly improved our decision-making. The team is professional, responsive, and always ready to assist with any queries. I highly recommend Exim Trade Data for reliable import export data and excellent customer service.</p>
                                    <Triangle className="absolute fill-gray-100 rotate-90 -left-0.5 text-transparent -bottom-3" />
                                </div>
                                <div className="flex mt-3 gap-5 items-center">
                                    <div className="w-14 h-14 rounded-full bg-sky-600 flex justify-center items-center">
                                        <h6 className="text-2xl font-semibold text-white">A</h6>
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-semibold text-black">Anjali Mishra</h5>
                                        <div className="flex gap-1">
                                            <Star className="fill-orange-400 text-orange-400" size={15} />
                                            <Star className="fill-orange-400 text-orange-400" size={15} />
                                            <Star className="fill-orange-400 text-orange-400" size={15} />
                                            <Star className="fill-orange-400 text-orange-400" size={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="p-4 rounded-2xl relative bg-gray-100">
                                    <h6 className="text-lg text-green-600 capitalize font-bold">smooth onboarding experience!</h6>
                                    <p className='text-base text-gray-700 mx-auto'>We had a great experience working with Goutam for the EXIM website data. He was incredibly helpful in guiding us through the portal, patiently explaining how to access and interpret the data effectively. His support made it easy for us to get started, and the information provided through the 6-month subscription has been clear, well-structured, and valuable for our analysis. A big thanks to Goutam for his proactive assistance and <b className="text-green-600">smooth onboarding experience!</b></p>
                                    <Triangle className="absolute fill-gray-100 rotate-90 -left-0.5 text-transparent -bottom-3" />
                                </div>
                                <div className="flex mt-3 gap-5 items-center">
                                    <div className="w-14 h-14 rounded-full bg-green-600 flex justify-center items-center">
                                        <h6 className="text-2xl font-semibold text-white">B</h6>
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-semibold text-black">Bhavya Sri Nadella</h5>
                                        <div className="flex gap-1">
                                            <Star className="fill-orange-400 text-orange-400" size={15} />
                                            <Star className="fill-orange-400 text-orange-400" size={15} />
                                            <Star className="fill-orange-400 text-orange-400" size={15} />
                                            <Star className="fill-orange-400 text-orange-400" size={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
