import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SucessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Success | Ignite Shop</title>
        <meta name="robots" content="noindex"/>
      </Head>
      <SucessContainer>
        <h1>Success</h1>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            width={120}
            height={110}
            alt={product.name}
          />
        </ImageContainer>
        <p>
          Awesome! {customerName} your {product.name} will arrive soon at the
          chosen destination!
        </p>
        <Link href="/">Back to home</Link>
      </SucessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const sessionId = String(query.session_id);
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;
  return {
    props: {
      customerName,
      product: {
        name: product.name,
        image: product.images[0],
      },
    },
  };
};
