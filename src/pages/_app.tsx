import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Navbar } from "../components/navbar/Navbar";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          margin: 0px;
        }
      `}</style>
    </Provider>
  );
}

export default MyApp;
