import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import "./MapPosition.css"


const MapPosition = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDvF1blzQkz1UsctVvXl1EpSTL-mM-wjZ0"
      })

     const position =  {
        lat: -12.995732734569346, 
        lng: -38.47379686136596
    }

    return (
        <>      
        <div className='div-map'>
        {isLoaded ? (
        <GoogleMap
        mapContainerStyle={{width: "100%", height: "100%"}}
        center={position}
        zoom={15}>
            <Marker position={position} options={{
               label: {
                   text: "Você está aqui",
                   className: "Edit" 
                }
            }}   />
       </GoogleMap>
  ) : (
  <></> 
)}
        </div>
        </>
    )
}

export {MapPosition};