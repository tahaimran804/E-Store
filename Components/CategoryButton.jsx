"use client"


import { FilterContext } from '@/Context/FilterProducts'
import React, { useContext } from 'react'

const CategoryButton = () => {
  const { setCategory, categories } = useContext(FilterContext)
  return (
    <>
      <div className='flex w-[20%] flex-col items-start gap-8 max-[900px]:w-full max-[900px]:gap-4 '>
        <h2 className='text-2xl font-semibold'>All Products</h2>
        <ul className='flex flex-col items-start gap-2 w-[100%]  max-[900px]:grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'>
          <button onClick={() => setCategory(null)} className='w-[100%] border border-gray-700 py-2
          '>All Products</button>
          {categories.map((elembnt, id) => (
            <button onClick={() => setCategory(elembnt)} key={id} className='w-[100%] cursor-pointer border border-gray-700 py-2'>{elembnt}</button>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CategoryButton
