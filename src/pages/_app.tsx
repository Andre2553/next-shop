import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import { Provider } from "react-redux";
import { store } from "../store";
import { Header } from "../components/Header";
globalStyles();

interface CartStatus {
  value: "false" | "true" | "default";
}
export default function App({ Component, pageProps }: AppProps) {


  return (
    <Provider store={store}>
      <Container>
        <Header/>
        <Component {...pageProps} />
      </Container>
    </Provider>
  );
}
