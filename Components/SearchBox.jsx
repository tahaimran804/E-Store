"use client"

import React, { useContext, useState } from 'react'
import { AllProducts } from './ProductData/Data'
import Link from 'next/link'
import style from '@/app/Style/RecentProduct.module.css'
import style1 from '@/app/Style/Header.module.css'
import Image from 'next/image'
import Container from './Container'
import { FaSearch } from 'react-icons/fa'
import { IoMdClose } from "react-icons/io";
import { FilterContext } from '@/Context/FilterProducts'

const SearchBox = () => {
  const { openSearchBox, setopenSearchBox } = useContext(FilterContext)
  const [searchValue, setSearchValue] = useState("")
  const SerachcItems = AllProducts.filter((items) => items.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div className='flex flex-col gap-4 items-center mx-4 justify-center w-[100%]'>
      <div className={`${style1.searchBox} border rounded-full w-[100%] flex items-center mx-6`}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchValue}
          onClick={() => setopenSearchBox(true)}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full focus:outline-none py-2 px-4 rounded-full border-0 focus:ring-2 focus:ring-indigo-400"
        />
        <span className="bg-indigo-600 cursor-pointer text-gray-100 rounded-r-full py-3 px-4"><FaSearch /></span>
      </div>
      {/* Search Items  */}

      <div
        className={`
    ${style1.SearchItems}
    flex flex-col border-l border-gray-300 bg-gray-100 
    w-[25rem] h-[100vh] fixed z-10 right-0 top-0 py-4 px-2 shadow-lg
    transition-all duration-500 ease-in-out
    ${openSearchBox ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
  `}
      >
        <span
          onClick={() => setopenSearchBox(false)}
          className="text-2xl text-gray-700 absolute top-4 right-4 cursor-pointer"
        >
          <IoMdClose />
        </span>

        <Container>
          <div className="w-full flex items-center flex-col">
            {/* Search input inside sidebar */}
            <div
              className={`${style1.RessearchBox} border mt-10 rounded-full w-full flex items-center justify-center mx-6`}
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full focus:outline-none py-2 px-4 rounded-full border-0 focus:ring-2 focus:ring-indigo-400"
              />
              <span className="bg-indigo-600 cursor-pointer text-gray-100 rounded-r-full py-3 px-4">
                <FaSearch />
              </span>
            </div>

            <h1 className="text-center text-3xl py-4 font-semibold">Search Results</h1>

            <div className="flex flex-col items-center w-full py-2 gap-6">
              {SerachcItems.length > 0 ? (
                SerachcItems.map((item) => (
                  <div key={item.slug} className={`shadow ${style.SearchProduct} rounded-md`}>
                    <Link onClick={() => setopenSearchBox(false)} href={`/store/ProductDetails/${item.slug}`}>
                      <span>
                        <Image
                          className="shadow-sm cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
                          src={item.image}
                          alt={item.alt}
                          width={400}
                          height={100}
                        />
                      </span>
                    </Link>
                    <div className="border-gray-700 flex mt-2 flex-col gap-1 items-start py-2 px-2">
                      <h1 className="text-xl font-semibold">{item.title}</h1>
                      <p className="text-[1rem] text-gray-700">{item.desc}</p>
                      <h2 className="text-xl font-medium text-indigo-500">Rs-{item.price}</h2>
                      <div className="flex w-full mt-2 flex-col gap-2">
                        <button className="w-full bg-indigo-600 border border-indigo-500 text-white py-2 px-6 rounded-full font-semibold 
                      transition-all duration-300 ease-in-out hover:bg-transparent hover:text-gray-700">
                          Add to Cart
                        </button>
                        <Link onClick={() => setopenSearchBox(false)} href={`/store/ProductDetails/${item.slug}`}>
                          <button className="w-full cursor-pointer bg-transparent border border-gray-700 py-2 px-6 
                        text-gray-700 rounded-full font-semibold 
                        transition-all duration-300 ease-in-out hover:bg-indigo-500 hover:text-white hover:border-indigo-500">
                            Buy Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-lg text-red-600">No products found</p>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default SearchBox