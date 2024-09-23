import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Meta } from "../components";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-calendar/dist/Calendar.css";
import "react-loading-skeleton/dist/skeleton.css";
import { ListingInputContextProvider } from "../context/ListingInputContext";
import Script from "next/script";
import "react-tooltip/dist/react-tooltip.css";
import { GoogleAnalytics } from "@next/third-parties/google";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.PLACES_KEY}&libraries=places&loading=async`}
      />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      <Provider store={store}>
        <ListingInputContextProvider>
          <ToastContainer
            theme="colored"
            position="top-right"
            autoClose={6000}
            hideProgressBar={false}
            newestOnTop={false}
            draggable={false}
            pauseOnVisibilityChange
            closeOnClick
            pauseOnHover
          />
          <Meta />
          <Component {...pageProps} />

          {/* <Script
            type="text/javascript"
            src="https://embed.tawk.to/6418b62731ebfa0fe7f3b0d9/1gs08f3mr"
            strategy="afterInteractive"
          /> */}
        </ListingInputContextProvider>
      </Provider>
    </>
  );
}

export default MyApp;
