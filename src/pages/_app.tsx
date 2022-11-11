import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import Image from 'next/image'
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";
import cart from '../assets/bag.svg'
import Link from "next/link";
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  
  return (
  <Container>
    <Header>
      <Link href="/" prefetch={false}><Image src={logoImg} alt="" /></Link>
      <button><Image src={cart} alt="" /></button>
    </Header>
    <Component {...pageProps} />
  </Container>
)}

