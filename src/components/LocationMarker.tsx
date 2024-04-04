
import { LatLngExpression } from 'leaflet'
import { useEffect } from 'react'
import { Marker, Popup, useMap} from 'react-leaflet'

type locationMarkerProps = {
  latlng: LatLngExpression
}

const LocationMarker = ({latlng}: locationMarkerProps) => {
  
  const map = useMap()

  useEffect(() =>{

    map.flyTo(latlng, map.getZoom())

  }, [map, latlng])
  

  return(
    <Marker position={latlng}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default LocationMarker