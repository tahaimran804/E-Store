import Container from '../Container'
import { RecentProducts } from '../ProductData/Data'
import ProductCard from '../ProductCard'

const RecentProduct = () => {

  return (
    <>
      <div className='bg-gray-100  w-full py-10 px-2 shadow-sm'>
        <Container>
          <h1 className='text-center text-4xl'>
            Recent Adding Products
          </h1>

          <div className='my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4 gap-6'>
            {RecentProducts.map((product) => {
              return (
                <ProductCard key={product.id} product={product} />
              )
            })}
          </div>

        </Container>
      </div>
    </>
  )
}

export default RecentProduct