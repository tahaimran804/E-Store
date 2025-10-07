import React from 'react'
import Container from './Container'
import style from '@/app/Style/RecentProduct.module.css'
import Image from 'next/image'
import Link from 'next/link'

const MyRelativeProducts = ({ RelativeProducts }) => {
  return (
    <div className='bg-gray-100 w-full py-10 px-2 shadow-sm'>
      <Container>
        <h1 className="text-center text-4xl py-4">Related Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4 gap-6">
          {RelativeProducts.length > 0 ? (
            RelativeProducts.map((item) => (
              <div key={item.slug} className={`shadow ${style.Product} rounded-md`}>
                <Link href={`/store/ProductDetails/${item.slug}`}>
                  <span>
                    <Image className='shadow-sm cursor-pointer transition-all duration-300 ease-in-out hover:scale-102' src={item.image} alt={item.alt} width={400} height={100} />
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
                    <Link href={`/store/ProductDetails/${item.slug}`}>
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
            <p className='text-lg text-red-600'>No related products found.</p>
          )}
        </div>
      </Container>
    </div>
  )
}

export default MyRelativeProducts