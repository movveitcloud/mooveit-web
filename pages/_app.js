import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Meta } from "../components";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-calendar/dist/Calendar.css";
import "react-loading-skeleton/dist/skeleton.css";
import { ListingInputContextProvider } from "../context/ListingInputContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script
        defer
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.PLACES_KEY}&libraries=places`}></script>
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
        </ListingInputContextProvider>
      </Provider>
    </>
  );
}

export default MyApp;
