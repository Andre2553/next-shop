import { HomeContainer, Products } from "../styles/pages/home";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import bag from "../assets/bag.svg";
import { useDispatch } from "react-redux";
import { IProduct } from "../store/modules/cart/types";
import { addProduct } from "../store/modules/cart/actions";

interface HomeProps {
  products: {
    id: string;
    name: string;
    price: string;
    imageUrl: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 2,
      spacing: 48,
    },
  });
  const dispatch = useDispatch();
  function addToCartHandler(p: IProduct) {
    dispatch(addProduct(p));
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            
            <Products className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <button
                  onClick={(e) =>{
                    e.stopPropagation();
                    addToCartHandler({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.imageUrl,
                      qty: 1,
                    });
                  }}
                >
                  <Image src={bag} width={25} height={25} alt="" />
                </button>
              </footer>
            </Products>
          </Link>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });
  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      price: new Intl.NumberFormat("au", {
        style: "currency",
        currency: "AUD",
      }).format(price.unit_amount / 100),
      imageUrl: product.images[0],
    };
  });
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
