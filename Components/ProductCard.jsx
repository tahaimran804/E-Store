import Image from 'next/image'
import React from 'react'
import style from '@/app/Style/RecentProduct.module.css'
import Link from 'next/link'

const ProductCard = ({ product }) => {
  return (
    <>
      <div className={`shadow ${style.Product} rounded-md`}>
        <Link href={`/store/ProductDetails/${product.slug}`}>
          <span >
            <Image className='shadow-sm cursor-pointer transition-all duration-300 ease-in-out hover:scale-102' src={product.image} alt={product.alt} width={400} height={100} />
          </span>
        </Link>
        <div className=' border-gray-700 flex mt-2 flex-col gap-1 items-start py-2 px-2'>
          <h1 className='text-xl font-semibold'>{product.title}</h1>
          <p className='text-[1rem] text-gray-700'>{product.desc}</p>
          <h2 className='text-xl font-medium text-indigo-500'>Rs-{product.price}</h2>
          <div className="flex w-full mt-2 flex-col gap-2">
            <button className="w-full bg-indigo-600 border border-indigo-500 text-white py-2 px-6 rounded-full font-semibold 
    transition-all duration-300 ease-in-out hover:bg-transparent hover:text-gray-700">
              Add to Cart
            </button>
            <Link href={`/store/ProductDetails/${product.slug}`}>
              <button className="w-full cursor-pointer bg-transparent border border-gray-700 py-2 px-6 
    text-gray-700 rounded-full font-semibold 
    transition-all duration-300 ease-in-out hover:bg-indigo-500 hover:text-white hover:border-indigo-500">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard