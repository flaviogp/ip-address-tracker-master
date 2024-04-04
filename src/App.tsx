import { useEffect, useState } from "react"
import Header from "./components/Header"
import Map from "./components/Map"
import useConnectApi from "./hooks/useConnectApi"
import { LatLngExpression } from "leaflet"


function App() {
  const [latlng, setLatlng] = useState<LatLngExpression>([0,0])
  const [ipValue, setIpvalue] = useState('')

  const {ipLocalization} = useConnectApi(ipValue)

    useEffect(() => {
      if(ipLocalization){
        setLatlng([ipLocalization.location.lat, ipLocalization.location.lng])
      }
      return;
    },[ipLocalization])

    console.log(ipLocalization)
  return (
      <div className="w-full h-screen">
        <Header ipLocalization={ipLocalization} setIpvalue={setIpvalue}/>
        <Map 
          latlng={latlng}
        />
      </div>
  )
}

export default App
