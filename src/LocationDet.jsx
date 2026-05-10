import React from "react";
import { useEffect, useState } from "react";

function LocationDet({ lat, lon }) {
    const [Locate, setLocate] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        if (lat !== null && lon !== null){
            const apiKey = import.meta.env.VITE_API_KEY; //use your api key from Openweather by creating your account
            const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}&units=metric`;
            fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                return res.json(); 
            })
            .then((data) => setLocate(data))
            .catch((err) => setError(err.message));
        }
    }, [lat, lon]);
    
    if (error) return <p>❌ API call failed: {error}</p>;
    if (!Locate) return <p>Loading....</p>;

  return (
    <div className="flex items-center justify-center py-50">
        <div className="card bg-sky-800/80 border-3 border-double border-white w-96 shadow-2xl rounded-xl py-9">
            <div className="card-body items-center text-center text-2xl font-serif font-bold">
                <p>Lat: {lat} & Lon: {lon}</p>
                <p>City: {Locate[0].name}</p>
                <p>State: {Locate[0].state}</p>
                <p>Country: {Locate[0].country}</p>
            </div>
        </div>
    </div>
  );
}

export default LocationDet;
