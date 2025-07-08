'use client'
import { Globe } from "@/components/magicui/globe"
import Link from "next/link";
import Searchdata from '../../common/Search'
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ArrowRight, ArrowUpRight, Factory, Star, Triangle } from "lucide-react";
import { Safari } from "@/components/magicui/safari";
import Slider from "react-slick";
import { Marquee } from "@/components/magicui/marquee";
import { small } from "motion/react-client";

const HomePage = () => {
    const canvasRef = useRef();
    useEffect(() => {
        let phi = 0;
        let width = 0;
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
        window.addEventListener('resize', onResize)
        onResize()
        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            phi: 0,
            theta: 0.3,
            dark: 0,
            diffuse: 0.4,
            mapSamples: 16000,
            mapBrightness: 1.2,
            baseColor: [1, 1, 1],
            markerColor: [251 / 255, 100 / 255, 21 / 255],
            glowColor: [0.7, 0.7, 0.7],
            markers: [
                { location: [14.5995, 120.9842], size: 0.03 },
                { location: [19.076, 72.8777], size: 0.1 },
                { location: [23.8103, 90.4125], size: 0.05 },
                { location: [30.0444, 31.2357], size: 0.07 },
                { location: [39.9042, 116.4074], size: 0.08 },
                { location: [-23.5505, -46.6333], size: 0.1 },
                { location: [19.4326, -99.1332], size: 0.1 },
                { location: [40.7128, -74.006], size: 0.1 },
                { location: [34.6937, 135.5022], size: 0.05 },
                { location: [41.0082, 28.9784], size: 0.06 },
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.005;
                state.width = width * 2;
                state.height = width * 2;
            }
        });
        setTimeout(() => canvasRef.current.style.opacity = '1')
        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        }
    }, [])

    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

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
        <>
            <section className="h-full pt-[76px] md:py-0 md:h-[90vh] flex justify-center items-center overflow-hidden relative bg-gradient-to-br bg-white bg-gradient-45 bg-opacity-50">
                <div className='absolute top-0 w-full h-screen z-0 opacity-60'>
                    <img src="./images/banner.webp" className='w-full' alt="" />
                </div>
                <div className="py-8 md:px-4 mx-auto container px-3lg:py-28 lg:px-12 z-10 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                        <div className="">
                            <h1 className="mb-4 text-4xl font-bold text-dark md:text-5xl lg:text-6xl xl:text-7xl lg:mx-auto">Find Global <br /> Buyers & Sellers</h1>
                            <p className="mb-8 text-lg font-bold text-blue-900 text-dark lg:text-2xl">Global Import Export Trade Intelligence Platform</p>
                            <p className="font-normal text-lg">Exim trade data analysis helps you to provide global export and import trade analysis. Exim Trade data was founded to resolve all your export-import business operation. </p>
                            <div className="flex items-center gap-2 mt-6">
                                <RainbowButton className="rounded-full h-10 bg-blue-900 font-bold">Get Unlimited Access</RainbowButton>
                                <InteractiveHoverButton>Enqiury Now</InteractiveHoverButton>
                            </div>
                        </div>
                        {/* <Globe className="top-9/12 max-w-[750px]" /> */}
                        <div style={{
                            width: '100%',
                            maxWidth: 700,
                            aspectRatio: 1,
                            margin: 'auto',
                            position: 'relative',
                        }}>
                            <canvas
                                ref={canvasRef}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    contain: 'layout paint size',
                                    opacity: 0,
                                    transition: 'opacity 1s ease',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="-mt-14">
                <div className="container mx-auto">
                    <Searchdata />
                </div>
            </section>

            <section className="py-20 mapbg px-10">
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-black font-semibold text-center text-base bg-emerald-50 py-1 px-2 border rounded-full inline-block">✨ Global Import Export Database</h3>
                        <h2 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug my-2">Customs Database Country wise</h2>
                        <p className='text-base text-gray-700 text-center max-w-5xl mx-auto'>Discover Country wise global import export data Statistics from our exclusive Global customs database. Find top-performing products, buyers list, suppliers list, importers, and exporters and convert them into your leads. Search International Import Export Data Country wise.</p>
                    </div>
                    <div className="mt-15 mb-10 grid grid-col-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        <div className="text-center ">
                            <div className="p-3rounded-lg">
                                <span className='fi fi-us block text-5xl'></span>
                            </div>
                            <h5 className="text-2xl text-black font-semibold mb-2">USA</h5>
                            <p className="text-base font-normal text-gray-600 line-clamp-2 mb-3">Discover potential sales opportunities in the US market with our impressive US import export data reports. Get a wide overview of the USA market through Exim Global Trade Intelligence System. Find accurate analytics and forecasts of the USA's top product imports, exports, importer, and exporter companies through US trade intelligence reports based on US customs data. Plan a successful marketing strategy by utilizing US trade data 2023-24 and double your business revenue.</p>
                            <Link href="#" className="mt-5">
                                <InteractiveHoverButton>Read More...</InteractiveHoverButton>
                            </Link>
                        </div>
                        <div className="text-center ">
                            <div className="p-3rounded-lg">
                                <span className='fi fi-tz block text-5xl'></span>
                            </div>
                            <h5 className="text-2xl text-black font-semibold mb-2">Tanzania</h5>
                            <p className="text-base font-normal text-gray-600 line-clamp-2 mb-3">Generate leads from our verified Tanzania import export data based on Global trade data recorded by other countries. Explore key business prospects such as Tanzania’s top buyers, suppliers, total import export shipments, importers list, and exporters list from our Tanzania Import Export Database.</p>
                            <Link href="#" className="mt-5">
                                <InteractiveHoverButton>Read More...</InteractiveHoverButton>
                            </Link>
                        </div>
                        <div className="text-center ">
                            <div className="p-3rounded-lg">
                                <span className='fi fi-mx block text-5xl'></span>
                            </div>
                            <h5 className="text-2xl text-black font-semibold mb-2">Mexico</h5>
                            <p className="text-base font-normal text-gray-600 line-clamp-2 mb-3">Get Verified Mexico import export data based on Global trade data reported by other countries. Monitor Mexico’s total import export shipments, top buyers, top sellers, Importers list, and exporters list from our Mexico Import Export Database. </p>
                            <Link href="#" className="mt-5">
                                <InteractiveHoverButton>Read More...</InteractiveHoverButton>
                            </Link>
                        </div>
                        <div className="text-center ">
                            <div className="p-3rounded-lg">
                                <span className='fi fi-ru block text-5xl'></span>
                            </div>
                            <h5 className="text-2xl text-black font-semibold mb-2">Russia</h5>
                            <p className="text-base font-normal text-gray-600 line-clamp-2 mb-3">Get Expert Russia import export data reports based on Russia customs data. Gain competitive insights from the Russian market through our Russia Import Export Database. Discover top Russia imports and exports by country, Russian buyers list, Russian suppliers list from our Russia Trade Data 2023-24. Establish a strong market presence in Russia through a data driven approach.</p>
                            <Link href="#" className="mt-5">
                                <InteractiveHoverButton>Read More...</InteractiveHoverButton>
                            </Link>
                        </div>
                        <div className="text-center ">
                            <div className="p-3rounded-lg">
                                <span className='fi fi-pa block text-5xl'></span>
                            </div>
                            <h5 className="text-2xl text-black font-semibold mb-2">Panama</h5>
                            <p className="text-base font-normal text-gray-600 line-clamp-2 mb-3">Find Detailed Panama Import Export Data based on the Panama Customs Data reported by other countries. Plan an impactful marketing strategy by analyzing Panama’s market current demand, competitors, potential buyers, suppliers from our exclusive Panama Import Export Database.</p>
                            <Link href="#" className="mt-5">
                                <InteractiveHoverButton>Read More...</InteractiveHoverButton>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <RainbowButton className="rounded-full h-10 bg-blue-900 font-bold">Enquiry Now <ArrowRight /></RainbowButton>
                    </div>
                </div>
            </section>


            <section className='py-20 bg-gray-100 px-10'>
                <div className="container px-3 md:px-0 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div>
                            <h4 className="text-black font-semibold text-center text-base bg-emerald-50 py-1 px-2 border rounded-full inline-block">✨Best Market Research Platform</h4>
                            <h3 className="mx-auto mb-5 text-balance text-4xl font-bold text-black my-5">Get Meaningful Industrial Insights with Exim GTIS</h3>
                            <p className='text-base text-gray-700 text-justify'>Exim GTIS is the best platform for market intelligence that helps identify the key performing factors for your company and streamline your workflow. Find the latest market trends, most traded HS codes, countries, ports, competitors and top import-export companies. Mitigate financial risk and reach out to the verified buyers and suppliers from over 200+ countries. Double your sales and generate the maximum revenue through our market research platform.</p>
                            <div className="flex items-center gap-2 mt-6">
                                <RainbowButton className="rounded-full h-10 bg-blue-900 font-bold">Explore Exim GTIS</RainbowButton>
                                <InteractiveHoverButton>Get API Access</InteractiveHoverButton>
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <Safari
                                    url="magicui.design"
                                    className="size-full"
                                    imageSrc="./images/dashboard.webp"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-20 px-10'>
                <div className="container px-3 md:px-0 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-black font-semibold text-center text-base bg-emerald-50 py-1 px-2 border rounded-full inline-block">✨Industry</h4>
                            <h3 className="mx-auto mb-5 text-balance text-4xl font-bold my-5">Exim Served Industries</h3>
                            <p className='text-base text-gray-700 text-justify'>Gain a deeper understanding of the global market with our powerful trade intelligence platform, designed to deliver industry-specific insights that drive smarter business decisions. </p>
                            <div className="flex items-center gap-2 mt-6">
                                <RainbowButton className="rounded-full h-10 bg-blue-900 font-bold">View All Industry <Factory /></RainbowButton>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <Slider {...settings}>
                                <div>
                                    <div className="w-full group relative min-h-96 h-[435] p-6 overflow-hidden rounded-4xl flex flex-col justify-end shadow" style={{ backgroundImage: 'linear-gradient(to top, #000,#0000,#0000), url(./images/agribusiness_md_banner.webp)' }}>
                                        <h5 className="text-3xl text-emerald-300 font-bold mb-3">Agribusiness</h5>
                                        <h6 className="text-lg text-white font-medium line-clamp-2">Get Expert Data Solutions for a Successful Agribusiness</h6>
                                        <Link href='#' className="text-base items-center gap-2 absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100"><InteractiveHoverButton>Read More</InteractiveHoverButton></Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full group relative min-h-96 h-[435] p-6 overflow-hidden rounded-4xl flex flex-col justify-end shadow" style={{ backgroundImage: 'linear-gradient(to top, #000,#0000,#0000), url(./images/automative_md_banner.webp)' }}>
                                        <h5 className="text-3xl text-emerald-300 font-bold mb-3">Automotive</h5>
                                        <h6 className="text-lg text-white font-medium line-clamp-2">Identify the Current Market Trends & Demands in the Automotive Market</h6>
                                        <Link href='#' className="text-base items-center gap-2 absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100"><InteractiveHoverButton>Read More</InteractiveHoverButton></Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full group relative min-h-96 h-[435] p-6 overflow-hidden rounded-4xl flex flex-col justify-end shadow" style={{ backgroundImage: 'linear-gradient(to top, #000,#0000,#0000), url(./images/importer_md_banner1.webp)' }}>
                                        <h5 className="text-3xl text-emerald-300 font-bold mb-3">Importers</h5>
                                        <h6 className="text-lg text-white font-medium line-clamp-2">Leading Trade Intelligence Platform for Global Importers</h6>
                                        <Link href='#' className="text-base items-center gap-2 absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100"><InteractiveHoverButton>Read More</InteractiveHoverButton></Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full group relative min-h-96 h-[435] p-6 overflow-hidden rounded-4xl flex flex-col justify-end shadow" style={{ backgroundImage: 'linear-gradient(to top, #000,#0000,#0000), url(./images/logistic_md_banner.webp)' }}>
                                        <h5 className="text-3xl text-emerald-300 font-bold mb-3">Supply Chain & Logistics</h5>
                                        <h6 className="text-lg text-white font-medium line-clamp-2">The Leading Trade Intelligence Platform for Supply Chain & Logistics Companies</h6>
                                        <Link href='#' className="text-base items-center gap-2 absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100"><InteractiveHoverButton>Read More</InteractiveHoverButton></Link>
                                    </div>
                                </div>
                            </Slider>
                            {/* <div className="grid grid-cols-2">
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>


            <section className="pb-20 pt-10 mapbg px-10">
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-black font-semibold text-center text-base bg-emerald-50 py-1 px-2 border rounded-full inline-block">✨ Global Import Export Database</h3>
                        <h2 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug my-2">Customs Database Country wise</h2>
                        <p className='text-base text-gray-700 text-center max-w-5xl mx-auto'>Discover Country wise global import export data Statistics from our exclusive Global customs database. Find top-performing products, buyers list, suppliers list, importers, and exporters and convert them into your leads. Search International Import Export Data Country wise.</p>
                    </div>
                    <div className="mt-15 mb-10 grid grid-col-2 md:grid-cols-3 gap-4">
                        <div className="text-center p-6 shadow-2xl bg-white rounded-3xl">
                            <div className="p-3 rounded-lg">
                                <img src="./images/actionable_insight.svg" alt="" className="w-10/12 mx-auto" />
                            </div>
                            <h5 className="text-3xl text-black font-semibold my-2">Actionable Insights</h5>
                            <p className="text-base font-normal text-gray-600 text-justify mb-3">Discover potential sales opportunities in the US market with our impressive US import export data reports. Get a wide overview of the USA market through Exim Global Trade Intelligence System. Find accurate analytics and forecasts of the USA's top product imports, exports, importer, and exporter companies through US trade intelligence reports based on US customs data. Plan a successful marketing strategy by utilizing US trade data 2023-24 and double your business revenue.</p>
                        </div>
                        <div className="text-center p-6 shadow-2xl bg-white rounded-3xl">
                            <div className="p-3 rounded-lg">
                                <img src="./images/know_market.svg" alt="" className="w-10/12 mx-auto" />
                            </div>
                            <h5 className="text-3xl text-black font-semibold my-2">Know Your Market</h5>
                            <p className="text-base font-normal text-gray-600 text-justify mb-3">For any business, the main challenge is to find buyers for their products. Our well researched global shipment data helps you to evaluate and develop your marketing strategy to grab new buyers in the foreign market.</p>
                        </div>
                        <div className="text-center p-6 shadow-2xl bg-white rounded-3xl">
                            <div className="p-3 rounded-lg">
                                <img src="./images/streamline_business.svg" alt="" className="w-10/12 mx-auto" />
                            </div>
                            <h5 className="text-3xl text-black font-semibold my-2">Streamline Your Business</h5>
                            <p className="text-base font-normal text-gray-600 text-justify mb-3">Streamline all your trading operations and pave the way for top-line growth for your business. With a precise overview of every business activity, discover the inefficient process and optimize your business operation through our global import export trade data.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-20 bg-blue-950 pt-10 cta px-10">
                <div className="container mx-auto">
                    <h2 className="mb-2 text-balance text-2xl md:text-4xl font-bold leading-snug text-white my-2">GROW WITH GLOBAL <br /> IMPORT EXPORT AND SHIPMENT RECORDS</h2>
                    <div className="flex items-center gap-2 mt-6">
                        <RainbowButton className="rounded-full h-10 bg-blue-900 font-bold text-base">Schedule A Demo <Factory /></RainbowButton>
                    </div>
                </div>
            </section>

            <section className="py-20 relative">
                <div className="container mx-auto">
                    <h2 className="mx-auto mb-5 text-center text-balance text-4xl font-bold leading-snug my-2">Why Choose Us</h2>
                    <div className="max-w-7xl p-6 rounded-3xl bg-gray-50 mx-auto border-t-2 border-emerald-500 sticky top-32 mb-10">
                        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-5">
                            <div>
                                <img src="./images/comprehensive_guide.svg" className="w-10/12" alt="" />
                            </div>
                            <div>
                                <h5 className="text-3xl text-black font-semibold my-2">Comprehensive Guide</h5>
                                <p className="text-base font-normal text-gray-600 text-justify mb-3">Get in-depth knowledge of existing market channels and consumer preferences around the globe. We provide a complete comprehensive guide of the global trade market that helps you to align your business with international trade with the help of our Global Import Export Trade Data.</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl p-6 rounded-3xl bg-gray-50 mx-auto border-t-2 border-emerald-500 sticky top-36">
                        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-5">
                            <div>
                                <h5 className="text-3xl text-black font-semibold my-2">Explore Foreign Market</h5>
                                <p className="text-base font-normal text-gray-600 text-justify mb-3">With our Global Export Import Trade Data, find overseas customers and discover the best match that adds better economic value to your product. Simplified and genuine trade data pave the way to successful overseas trade for your business.</p>
                            </div>
                            <div>
                                <img src="./images/explore_foreign.svg" className="w-10/12" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl p-6 rounded-3xl bg-gray-50 mx-auto border-t-2 border-emerald-500 sticky top-40">
                        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-5">
                            <div>
                                <img src="./images/valuable_partnership.svg" className="w-10/12" alt="" />
                            </div>
                            <div>
                                <h5 className="text-3xl text-black font-semibold my-2">Build Valuable Partnership</h5>
                                <p className="text-base font-normal text-gray-600 text-justify mb-3">With our fine tailored global import export trade data, assess your readiness for the target market and grow with your business. Understand the key aspects of international trade and associate with valuable industry peers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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


        </>
    )
}


export default HomePage