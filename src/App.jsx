import React, { useState } from "react";
import LocationButton from "./LocationButton";
import LocationDet from "./LocationDet";

function App() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const handleLocationFetched = (latitude, longitude) => {
    setLat(latitude);
    setLon(longitude);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-[url('/map1.jpg')]">
      {lat===null || lon===null ? (
        <h1 className="text-2xl font-bold">LOCATION FINDER</h1>
      ) : (<h1 className="text-2xl font-bold">Your Location</h1>)}


      {lat === null || lon === null ? (
        <LocationButton onLocationFetched={handleLocationFetched} />
      ) : (
        <LocationDet lat={lat} lon={lon} />
      )}

    </div>
  );
}

export default App;
