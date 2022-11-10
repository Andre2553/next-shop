import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/prodcuts";

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: string;
    imageUrl: string;
    description: string;
  };
}

export default function Product({ product }: ProductProps) {

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product?.imageUrl || ""} width={520} height={480} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>{product?.name || <Skeleton />}</h1>
        <span>{product?.price || <Skeleton />}</span>
        <p>{product?.description|| <Skeleton />}</p>
        <button>
          Buy
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return{
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });
  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        price: new Intl.NumberFormat("au", {
          style: "currency",
          currency: "AUD",
        }).format(price.unit_amount / 100),
        imageUrl: product.images[0],
        description: product.description,
      },
    },
  };
};
