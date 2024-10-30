import { useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places"];

function GoogleMapProvider({ children }) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    libraries: libraries,
  });

  if (loadError) return <p>Unable to load map api</p>;

  if (!scriptLoaded) return <p>loading ...</p>;

  return children;
}

export default GoogleMapProvider;
