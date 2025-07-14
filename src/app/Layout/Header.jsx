"use client";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ArrowRightIcon, BookA, Building, Car, Coins, Container, DraftingCompassIcon, FileBadge, FileSearch, Hammer, Import, Lightbulb, LucideAward, MonitorCog, Settings2, ShieldCheckIcon, ShoppingBag, ShoppingCart, TestTube2, TreesIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menushow, setMenuShow] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true); // Add class if scrolled more than 100px
    } else {
      setScrolled(false); // Remove class if scrolled back up
    }
  };

  // Use useEffect to attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`relative myshadow ${scrolled ? "sticky top-0 bg-[#ffffffbd]" : "bg-transparent"
          }  px-2 md:px-0 top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-[999] lg:border-b lg:border-slate-900/10 supports-backdrop-blur:bg-white/60 `}
      >
        <header className="container mx-auto py-1 flex items-center justify-between">
          <Link href="/" className="font-bold text-white text-xl">
            <img src="./images/logo.png" className="w-[145px]" alt="Exim Trade Data Logo" title="Exim Trade Data Logo" />
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-3 justify-center font-semibold">
              <li className="relative group px-3 py-[30px] cursor-pointer">
                <Link href="/" className="hover:opacity-50">
                  Home
                </Link>
              </li>
              <li className="relative group px-3 py-[30px] cursor-pointer">
                <Link href="/aboutus" className="hover:opacity-50">
                  About
                </Link>
              </li>
              <li className="relative group px-3 py-[30px] cursor-pointer">
                <Link href="/" className="hover:opacity-50">
                  Services
                </Link>
              </li>


              <li className="group px-3 py-[30px] cursor-pointer">
                <button className="hover:opacity-50">Solutions</button>
                <div className="absolute top-[45px] left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-[999] min-w-[1200px] w-full transform">
                  {/* <div className="w-10 h-10 bg-white transform rotate-45 absolute top-5 z-0 translate-x-0 transition-transform group-hover:translate-x-[13rem] duration-500 ease-in-out rounded-sm"></div> */}
                  <div className="container mx-auto">
                    <div className="relative top-6 p-6 bg-white z-10 rounded-xl shadow-xl w-full">
                      <div className="relative z-10 grid grid-cols-3 gap-5">

                        <div className="col-span-2">
                          <div className="grid grid-cols-3 gap-6">
                            <div>
                              <ul className="mt-3 text-[15px]">
                                <li>
                                  <Link
                                    href="https://gtdservice.com/agribusiness"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                  <div className="p-1 rounded-sm bg-blue-900 text-white"><TreesIcon/></div> Agribusiness
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="https://gtdservice.com/automative"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><Car /></div>Automotive
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="https://gtdservice.com/energy"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><Lightbulb /></div>Energy Sector
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="https://gtdservice.com/research-and-consulting"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><FileSearch/></div>Research & Consulting
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="https://gtdservice.com/insurance-companies"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><FileBadge/></div>Insurance Companies
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="https://gtdservice.com/finance"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><Coins/></div>Financial Sector
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="https://gtdservice.com/academic-and-education"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><BookA/></div>Academic & Education
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <ul className="mt-3 text-[15px]">
                                <li>
                                  <Link
                                    href="https://gtdservice.com/corporation"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><Building/></div>Corporation
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="https://gtdservice.com/asset-management"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><Settings2/></div>Asset Management
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="https://gtdservice.com/government-agencies"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><DraftingCompassIcon/></div>Government Agencies
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="https://gtdservice.com/law-firms"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><LucideAward/></div>Law Firms
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="https://gtdservice.com/construction"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><Hammer/></div>Construction
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="https://gtdservice.com/chemical"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><TestTube2/></div>Chemical
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="https://gtdservice.com/aerospace-and-defence"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><ShieldCheckIcon/></div>Aerospace & Defence
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <ul className="mt-3 text-[15px]">
                                <li>
                                  <Link
                                    href="https://gtdservice.com/importers"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><Import/></div>Importers
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/exporters"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><Import className="rotate-180"/></div>Exporters
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="https://gtdservice.com/supply-chain-and-logistics"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><Container/></div>Supply Chain & Logistics
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="https://gtdservice.com/it-and-consulting"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><MonitorCog/></div>IT & Consulting
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="https://gtdservice.com/retail"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><ShoppingBag/></div>Retail
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="https://gtdservice.com/sales-and-marketing"
                                    className="flex gap-2 items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:bg-emerald-100 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900"
                                  >
                                     <div className="p-1 rounded-sm bg-blue-900 text-white"><ShoppingCart/></div>Sales & Marketing
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl flexgap-4">

                          <div>
                            <h6 className="text-black font-bold text-lg">
                              Solutions
                            </h6>
                            <p className="text-black font-normal text-base mb-3">
                              Gain industry specific insights through our trade
                              intelligence platform. Identify the potential
                              business opportunities in the global market with our
                              expert intelligence reports.
                            </p>
                            <div className="block">
                              <InteractiveHoverButton>View All Industries</InteractiveHoverButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="relative group px-3 py-[30px] cursor-pointer">
                <Link
                  href="/search-global-trade-data"
                  className="hover:opacity-50"
                >
                  Search Data
                </Link>
              </li>
              <li className="relative group px-3 py-[30px] cursor-pointer">
                <Link
                  href="/import-export-data-country-wise"
                  className="hover:opacity-50"
                >
                  Countries
                </Link>
              </li>
              <li className="relative group px-3 py-[30px] cursor-pointer">
                <Link
                  href="/api-development-and-integration-company"
                  className="hover:opacity-50"
                >
                  API
                </Link>
              </li>
              <li className="relative group px-3 py-[30px] cursor-pointer">
                <Link href="/pricing" className="hover:opacity-50">
                  Pricing
                </Link>
              </li>
              <li className="relative group px-3 py-[30px] cursor-pointer">
                <Link href="/contact" className="hover:opacity-50">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="flex items-center gap-6">
              {/* <li>
              <Link to="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
              </svg>
              </Link>
              </li> */}
              <li>
                <Link href='#'> <RainbowButton className="rounded-full h-10 bg-blue-900 font-bold">  Free Demo<ArrowRightIcon /> </RainbowButton></Link>
              </li>
              <li className="lg:hidden" onClick={() => setMenuShow(!menushow)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      {menushow ? <Mobileheader setMenuShow={setMenuShow} /> : ""}
    </>
  );
};

export default Header;

const Mobileheader = ({ setMenuShow }) => {
  const [dropdownmobile, setDropDownMobile] = useState(false);

  return (
    <>
      <nav className="lg:hidden fixed w-screen h-screen z-50 p-5 bg-black bg-opacity-80">
        <div
          className="absolute top-7 right-7 z-50"
          onClick={() => setMenuShow(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 fill-white"
          >
            <path
              className="fill-white"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <ul className="flex flex-col gap-3 py-5 px-3 font-semibold bg-white h-full rounded-xl overflow-y-auto overflow-x-hidden">
          <li className="relative group px-3 py-[30px] cursor-pointer">
            <Link
              href="/"
              className="hover:opacity-50"
              onClick={() => setMenuShow(false)}
            >
              Home
            </Link>
          </li>
          <li className="relative group px-3 py-[30px] cursor-pointer">
            <Link href="/about" className="hover:opacity-50" onClick={() => setMenuShow(false)}>
              About
            </Link>
          </li>
          <li className="relative group px-3 py-[30px] cursor-pointer">
            <Link href="/services" className="hover:opacity-50" onClick={() => setMenuShow(false)}>
              Services
            </Link>
          </li>
          <li className="relative group px-3 py-[30px] cursor-pointer w-full">
            <button onClick={() => setDropDownMobile(!dropdownmobile)} className="hover:opacity-50 w-full flex items-center justify-between">
              Solutions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right ml-1  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
            <div className={`${dropdownmobile ? '' : 'hidden'} top-0 left-0 transition translate-y-0 duration-500 ease-in-out group-hover:transform z-50 w-full transform`}>
              <div className="w-10 h-10 bg-white transform rotate-45 absolute top-5 z-0 duration-500 ease-in-out rounded-sm"></div>
              <div className="relative top-0 p-6 bg-white z-10 rounded-xl shadow-xl w-full">
                <div className="relative z-10">
                  <div className="p-3 bg-slate-50 rounded-xl hidden md:flex items-center gap-4">
                    <img
                      src="./images/solutions.svg"
                      className="w-24"
                      alt="Solutions"
                      title="Solutions"
                    />
                    <div>
                      <h6 className="text-black font-bold text-lg">
                        Solutions
                      </h6>
                      <p className="text-black font-normal text-base">
                        Gain industry specific insights through our trade
                        intelligence platform. Identify the potential business
                        opportunities in the global market with our expert
                        intelligence reports.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div>
                      <ul className="mb-0 text-[15px]">
                        <li>
                          <Link
                            href="https://gtdservice.com/agribusiness"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Agribusiness
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://gtdservice.com/automative"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Automotive
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://gtdservice.com/energy"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Energy Sector
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://gtdservice.com/research-and-consulting"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Research & Consulting
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://gtdservice.com/insurance-companies"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Insurance Companies
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://gtdservice.com/finance"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Financial Sector
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://gtdservice.com/academic-and-education"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Academic & Education
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="mb-0 text-[15px]">
                        <li>
                          <Link
                            href="https://gtdservice.com/corporation"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Corporation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://gtdservice.com/asset-management"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Asset Management
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://gtdservice.com/government-agencies"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Government Agencies
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://gtdservice.com/law-firms"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Law Firms
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://gtdservice.com/construction"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Construction
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://gtdservice.com/chemical"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Chemical
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://gtdservice.com/aerospace-and-defence"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Aerospace & Defence
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="mb-0 text-[15px]">
                        <li>
                          <Link
                            href="https://gtdservice.com/importers"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Importers
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://gtdservice.com/exporters"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Exporters
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://gtdservice.com/supply-chain-and-logistics"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Supply Chain & Logistics
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://gtdservice.com/it-and-consulting"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            IT & Consulting
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://gtdservice.com/retail"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Retail
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://gtdservice.com/sales-and-marketing"
                            className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 mb-2 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-blue-900" onClick={() => setMenuShow(false)}
                          >
                            Sales & Marketing
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/*<li className="relative group px-3 py-[30px] cursor-pointer">
                <Link
                  href="/search-global-trade-data"
                  className="hover:opacity-50"
                >
                  Search Data
                </Link>
              </li> */}
          <li className="relative group px-3 py-[30px] cursor-pointer">
            <Link
              href="/import-export-data-country-wise"
              className="hover:opacity-50"
              onClick={() => setMenuShow(false)}
            >
              Countries
            </Link>
          </li>
          <li className="relative group px-3 py-[30px] cursor-pointer">
            <Link
              href="/search-global-trade-data"
              className="hover:opacity-50"
              onClick={() => setMenuShow(false)}
            >
              Search Data
            </Link>
          </li>
          <li className="relative group px-3 py-[30px] cursor-pointer">
            <Link
              href="/api-development-and-integration-company"
              className="hover:opacity-50"
              onClick={() => setMenuShow(false)}
            >
              API
            </Link>
          </li>
          <li className="relative group px-3 py-[30px] cursor-pointer">
            <Link href="/pricing" className="hover:opacity-50" onClick={() => setMenuShow(false)}>
              Pricing
            </Link>
          </li>
          <li className="relative group px-3 py-[30px] cursor-pointer">
            <Link href="/contact" className="hover:opacity-50" onClick={() => setMenuShow(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
