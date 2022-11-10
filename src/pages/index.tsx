import { HomeContainer, Products } from "../styles/pages/home";
import { useKeenSlider} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { GetServerSideProps, GetStaticProps } from "next";
import Image from "next/image";

interface HomeProps{ 
  products: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  }[]
}

export default function Home({products}:HomeProps) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => (
        <Products key={product.id} className="keen-slider__slide">
        <Image src={product.imageUrl} width={520} height={480} alt=""/>
        <footer>
          <strong>{product.name}</strong>
          <span>{product.price}</span>
        </footer>
      </Products>
      ))}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      price: new Intl.NumberFormat('au',{
        style: 'currency',
        currency: 'AUD'
      }).format(price.unit_amount / 100),
      imageUrl: product.images[0],
    }
  })
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}