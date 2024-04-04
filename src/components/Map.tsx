import { MapContainer, TileLayer} from 'react-leaflet'
import LocationMarker from './LocationMarker'
import { LatLngExpression} from 'leaflet'

type MapProps = {
  latlng: LatLngExpression;
}

const Map = ({latlng}: MapProps) => {

  return (
    <div
    className='relative w-full h-[500px] z-0'
    >
        <MapContainer 
          center={latlng} 
          zoom={5} 
          scrollWheelZoom={true} 
          className='absolute top-0 bottom-0 left-0 right-0' >
            <TileLayer 
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=yHSKv4Vd3R4E6rw2Nu4J" 
            />
            <LocationMarker  latlng={latlng}/>
        </MapContainer>
    </div>
  )
}

export default Map