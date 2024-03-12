  

import React from "react";
import { useState,useEffect } from "react";


export function useGeolocation(){ 
  const [error, setError] = useState(null);
  const [position, setPosition] = useState({});
  const [isLoading, setIsLoading] = useState(false);


function getPosition1(){




           if (!navigator.geolocation)
           return setError("Your browser does not support geolocation");
           setIsLoading(true);
           navigator.geolocation.getCurrentPosition(
              (pos) => {
                setPosition({
                  lat: pos.coords.latitude,
                  lng: pos.coords.longitude
                });
                setIsLoading(false);
              },
              (error) => {
                  setError(error.message);
                  setIsLoading(false);
              }

           )

           if (!navigator.geolocation)
           return setError("Your browser does not support geolocation");
           setIsLoading(true);
           navigator.geolocation.getCurrentPosition(
              (pos) => {
                setPosition({
                  lat: pos.coords.latitude,
                  lng: pos.coords.longitude
                });
                setIsLoading(false);
              },
              (error) => {
                  setError(error.message);
                  setIsLoading(false);
              }
            );

}

      
      

  
    
    return{position,error,isLoading,getPosition1}

 
}