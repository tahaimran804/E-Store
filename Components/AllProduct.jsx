"use client"
import Container from './Container'
import ProductCard from './ProductCard'
import { useContext } from 'react'
import { FilterContext } from '@/Context/FilterProducts'

const AllProduct = () => {
  const { filterCategory } = useContext(FilterContext)
  return (
    <>
      <div className='w-[80%] h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-[900px]:w-full'>
        {filterCategory.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default AllProduct
