import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'


const Map = () => {
  return (
    <div className='relative w-96 h-96'>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className='absolute top-0 bottom-0 left-0 right-0' >
            <TileLayer 
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=yHSKv4Vd3R4E6rw2Nu4J" 
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    </div>
  )
}

export default Map