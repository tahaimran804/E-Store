import Container from '../Container'
import ProductSlider from './ProductSlider'
import style from '@/app/Style/Hero.module.css'
import { FaArrowRight } from "react-icons/fa6";


const HeroSection = () => {
  return (
    <Container>
      <div className={style.HeroSection}>
        <section className={style.Hero_sec}>
          <h1 className='text-gray-700 text-5xl'>One Stop Solution <span className='text-4xl font-bold text-indigo-600'>E-Store</span></h1>
          <p className='text-2xl'>Discover The Latest Headphone, Earphone, Mobiles, Tablet, Smart Watches, Etc</p>
          <p className='text-2xl'>Best Deal Just For You</p>
          <button className='flex items-center gap-3 mt-8 bg-transparent py-2 px-6 rounded-full border hover:text-indigo-600'>Show Now <span className='text-indigo-500'><FaArrowRight /></span></button>
        </section>
        <ProductSlider />
      </div>
    </Container>
  )
}

export default HeroSection