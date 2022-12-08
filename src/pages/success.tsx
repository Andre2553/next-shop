import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, ImagesContainer, SucessContainer } from "../styles/pages/success";

interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
}
interface SuccessProps {
  customerName: string;
  products: IProduct[];
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Success | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SucessContainer>
        
        <ImagesContainer>
          {products.map((product) => (
            <ImageContainer key={product.id}>
              <Image
                src={product.imageUrl}
                width={140}
                height={140}
                alt={product.name}
              />
            </ImageContainer>
          ))}
        </ImagesContainer>
        <h1>Success</h1>
        <p>
          Awesome! {customerName} your products will arrive soon at the chosen
          destination!
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

  const products = session.line_items.data.map((item: Stripe.LineItem) => {
    const product = item.price.product as Stripe.Product;
    console.log("product");
    console.log(product);
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
    };
  });

  console.log("products");
  console.log(products);
  return {
    props: {
      customerName,
      products: products,
    },
  };
};
