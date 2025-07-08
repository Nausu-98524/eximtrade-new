"use client";
import React, { useState } from "react";
import Link from "next/link";


const Footer = () => {



  return (
    <>
      <footer className="bg-blue-950">
        <div className="container mx-auto pt-20 pb-5 px-6 md:px-0">
          <div className="grid gap-12 xl:grid-cols-5 xl:gap-5">
            <div className="col-span-2">
              <h5 className='mb-3 text-emerald-400 text-lg font-semibold'>Subscribe Newsletter</h5>
              <form action="#">
                <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div class="relative w-full">
                    <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email" type="email" id="email" required=""/>
                  </div>
                  <div>
                    <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-emerald-500 border-emerald-600 sm:rounded-none sm:rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">Subscribe</button>
                  </div>
                </div>
              </form>
              <div className="flex gap-4 my-3">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mt-1 fill-white">
                    <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className='font-medium text-gray-300'>Shpere Eximia Research Pvt Ltd G-232 , Noida Sector-63, Uttar Pradesh - 201301, India</p>
              </div>
              <div className="flex gap-4 mb-3">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 fill-white mt-1">
                    <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                    <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
                  </svg>

                </div>
                <Link href='tel:+91-9625812393' className='font-medium text-gray-300'>+91-9625812393</Link>
              </div>
              <div className="flex gap-4 mb-3">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mt-1 fill-white">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </div>
                <Link href='mail:Info@eximtradedata.com' className='font-medium text-gray-300'>Info@eximtradedata.com
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-base font-semibold text-emerald-400 uppercase">
                Support
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    href="/contact"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/faqs"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Faqs
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/pricing"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Pricing
                  </Link>
                </li>
                {/* <li className="mb-2">
                  <Link
                    href="/blog"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Blog
                  </Link>
                </li> */}
                {/* <li className="mb-2">
                  <Link
                    href=""
                    className="font-medium text-gray-300 hover:underline"
                  >
                    GTD News
                  </Link>
                </li> */}
              </ul>

              <h3 className="mb-6 mt-6 text-base font-semibold text-emerald-400 uppercase">
                Legal
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    href="/privacy"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/terms"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/refund-policy"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Refunds Policy
                  </Link>
                </li>
              </ul>
              <h3 className="mt-6 text-base font-semibold text-emerald-400 uppercase">
                Company
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    href="/about"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/services"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Why Choose Us
                  </Link>
                </li>
                <li className="mb-2 flex items-center">
                  <Link
                    href="/our-client"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Our Clients
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden md:block">


              <h3 className="mb-6 text-base font-semibold text-emerald-400 uppercase">
                Solutions
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    href="/agribusiness"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Agribusiness
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/asset-management"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Asset Management
                  </Link>
                </li>
                <li className="mb-2 flex items-center">
                  <Link
                    href="/academic-and-education"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Academic and Education
                  </Link>
                </li>
                <li className="mb-2 flex items-center">
                  <Link
                    href="/automative"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Automotive
                  </Link>
                </li>
                <li className="mb-2 flex items-center">
                  <Link
                    href="/aerospace-and-defence"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Aerospace and Defence
                  </Link>
                </li>
                <li className="mb-2 flex items-center">
                  <Link
                    href="/construction"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Construction
                  </Link>
                </li>
                <li className="mb-2 flex items-center">
                  <Link
                    href="/chemical"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Chemical
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/energy"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Energy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/exporters"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Exporters
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/importers"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Importers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/law-firms"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Law Firms
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/retail"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Retail
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/sales-and-marketing"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Sales and Marketing
                  </Link>
                </li>

              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-base font-semibold text-emerald-400 uppercase">
                Important Links
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    href="/get-started"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Get Trial
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded animate-ping ml-2">
                      New
                    </span>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/import-export-data-country-wise"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Countries Covered
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/global-companies-list"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Global Companies
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/global-ports"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Global Ports
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/industries-covered"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Industries Covered
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/global-trade-database"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Global Trade Database
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/global-products"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Global Products
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/api-development-and-integration-company"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    API Integration & Development
                  </Link>
                </li>
                {/*<li className="mb-2">
                  <Link
                    href="/gst-rates"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    GST Rates by HSN Code
                  </Link>
                </li>*/}
                <li className="mb-2">
                  <Link
                    href="/hsn-code-list"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Global HSN Code List
                  </Link>
                </li>
                {/*<li className="mb-2">
                  <Link
                    href="/global-hs-code-list"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Search HSN Code
                  </Link>
                </li>*/}
                <li className="mb-2">
                  <Link
                    href="/partners"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Referral Partners
                  </Link>
                </li>
              </ul>
            </div>

          </div>
          <div className="md:flex mt-10 justify-between items-center pt-5 border-t border-gray-500">
            <Link className="text-gray-400 mb-4 md:mb-0 block" href="">
              XML Site Map
            </Link>
            <p className="text-gray-400">
              All Right Reserved by Exim Trade Data | Copyright @2025-2026
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
