import { useEffect, useState } from "react"
import Header from "./components/Header"
import Map from "./components/Map"
import useConnectApi from "./hooks/useConnectApi"
import { LatLngExpression } from "leaflet"


function App() {
  const [latlng, setLatlng] = useState<LatLngExpression>([0,0])
  const [ipValue, setIpvalue] = useState('')

  const {ipLocalization} = useConnectApi(ipValue)
  console.log(ipLocalization)

    useEffect(() => {
      if(ipLocalization){
        setLatlng([ipLocalization.location.lat, ipLocalization.location.lng])
      }
      return;
    },[ipLocalization])

  return (
    <div className="w-full h-screen">
      <Header ipLocalization={ipLocalization} setIpvalue={setIpvalue}/>
      <Map 
        latlng={latlng}
      />
      <div>
      </div>
    </div>
  )
}

export default App
