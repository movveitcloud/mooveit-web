import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Google() {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.PLACES_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  const markers = [
    { position: { lat: 59.955413, lng: 30.337844 }, id: 1 },
    {
      position: {
        lat: 51.43186499999999,
        lng: -1.0104255,
      },
      id: 2,
    },
    { position: { lat: 49.955413, lng: 20.337844 }, id: 3 },
    // { lat: 39.955413, lng: 10.337844 },
  ];
  {
    markers.map((val) => {
      //return <Marker lat={59.955413} lng={30.337844} />;
      return (
        <div key={val.id}>
          <MarkerF position={val.position} />
        </div>
      );

      //         //return <Marker {...defaultProps.greatPlaceCoords} />;
    });
  }
  let centers = { lat: 59.955413, lng: 30.337844 };
  return (
    <GoogleMap
      center={centers}
      {...markers.map((val) => {
        centers = val.position;
        //return <Marker lat={59.955413} lng={30.337844} />;
        return val.position;

        //         //return <Marker {...defaultProps.greatPlaceCoords} />;
      })}
      // center={{ lat: 59.955413, lng: 30.337844 }}
      mapContainerClassName="h-[500px] w-full"
      zoom={10}>
      {/* <Marker position={{ lat: 44, lng: -80 }} />;
      <Marker position={{ lat: 59.955413, lng: 30.337844 }} />; */}
      {markers.map((val) => {
        //return <Marker lat={59.955413} lng={30.337844} />;
        console.log(val.position);
        return (
          <div key={val.id}>
            <MarkerF position={centers} />
          </div>
        );

        //         //return <Marker {...defaultProps.greatPlaceCoords} />;
      })}
    </GoogleMap>
  );
}
