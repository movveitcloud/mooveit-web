import { PageTransition } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PageTransition>
      <Component {...pageProps} />
    </PageTransition>
  );
}

export default MyApp;
