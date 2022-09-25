import { Provider } from "react-redux";
import { store } from "../redux/store";
import { PageTransition } from "../components";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <PageTransition> */}
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
      <Component {...pageProps} />
      {/* </PageTransition> */}
    </Provider>
  );
}

export default MyApp;
