import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'
import camisa01 from '../assets/camisa01.png'
import camisa02 from '../assets/camisa02.png'
import camisa03 from '../assets/camisa03.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image
          src={camisa01}
          width={520}
          height={480}
          alt=""
        />
        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 64,78</span>
        </footer>
      </Product>
      <Product>
        <Image
          src={camisa02}
          width={520}
          height={480}
          alt=""
        />
        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 64,78</span>
        </footer>
      </Product>
      <Product>
        <Image
          src={camisa03}
          width={520}
          height={480}
          alt=""
        />
        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 64,78</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
