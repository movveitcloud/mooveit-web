import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Meta, PageTransition } from "../components";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-calendar/dist/Calendar.css";
import "react-loading-skeleton/dist/skeleton.css";
import { ListingInputContextProvider } from "../context/ListingInputContext";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.PLACES_KEY}&libraries=places`}></script>
      <Provider store={store}>
        {/* <PageTransition> */}
        <ListingInputContextProvider>
          <ToastContainer
            theme="colored"
            position="bottom-center"
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
        </ListingInputContextProvider>
        {/* </PageTransition> */}
      </Provider>
    </>
  );
}

export default MyApp;
