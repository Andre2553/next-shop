import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { useDispatch, useSelector } from "react-redux";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/products";
import { addProduct } from "../../store/modules/cart/actions";

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: string;
    imageUrl: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  
  const dispatch = useDispatch();
  
  function handleAddToCart() {
    console.log("add to cart");
    console.log(product);
    dispatch(addProduct({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.imageUrl,
        defaultPriceId: product.defaultPriceId,
        qty: 1,
      },
    ));
  }
  return (
    <>
      <Head>
        <title>{product?.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image
            src={product?.imageUrl || ""}
            width={520}
            height={480}
            alt=""
          />
        </ImageContainer>
        <ProductDetails>
          <h1>{product?.name || <Skeleton />}</h1>
          <span>{product?.price || <Skeleton />}</span>
          <p>{product?.description || <Skeleton />}</p>
          <button

            onClick={handleAddToCart}
          >
            Buy
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

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
        defaultPriceId: price.id,
      },
    },
  };
};
