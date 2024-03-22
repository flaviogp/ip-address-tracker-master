import Map from "./components/Map"
import useConnectApi from "./components/hooks/useConnectApi"


function App() {
  const {ipLocalization} = useConnectApi('192.169.1.1')
  return (
    <div className="container">
      <Map />
      {ipLocalization && <div>{ipLocalization.location.region}</div>}
    </div>
  )
}

export default App
