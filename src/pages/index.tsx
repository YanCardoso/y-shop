import { HomeContainer, Product, ScrollContainer } from '@/styles/pages/home'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import camisa01 from '../assets/camisa01.png'
import camisa02 from '../assets/camisa02.png'
import camisa03 from '../assets/camisa03.png'
import { GetServerSideProps } from 'next'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

interface ItemProps {
  id: string
  name: string
  imgUrl: string
  price: number
}

interface HomeProps {
  products: ItemProps[]
}

export default function Home({ products }: HomeProps) {
  const [ref] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer>
      <ScrollContainer
        ref={ref}
        className="keen-slider"
      >
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              className="keen-slider__slide"
            >
              <Image
                src={product.imgUrl}
                width={520}
                height={480}
                alt=""
              />
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          )
        })}
      </ScrollContainer>
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imgUrl: product.images[0],
      price: price.unit_amount! / 100,
    }
  })

  return {
    props: {
      products: products,
    },
  }
}
