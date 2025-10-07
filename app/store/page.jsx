import Container from '@/Components/Container'
import CategoryButton from '@/Components/CategoryButton'
import MyAllProducts from '@/Components/AllProduct'
import style from '@/app/Style/Hero.module.css'

const page = () => {
  return (
    <>
      <Container>
        <div className={style.StoreProducts}>
          <CategoryButton />
          <MyAllProducts />
        </div>
      </Container>
    </>
  )
}

export default page
