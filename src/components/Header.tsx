import { GeolocalizationApi } from '../hooks/useConnectApi'
import AddressInfo from './AddressInfo';
import IpSearch from './IpSearch';


type HeaderProps = {
    ipLocalization: GeolocalizationApi | null;
    setIpvalue : (arg: string) => void
}

const Header = ({ipLocalization, setIpvalue}: HeaderProps) => {
  return (
    <header className='
        w-full h-[300px] bg-tw-pattern-mobile bg-cover bg-no-repeat
        flex flex-col items-center relative p-5  gap-5
        md:bg-tw-pattern-desktop md:h-[250px]

        '
    >
        <h1 className='text-white'>IP Adress Tracker</h1>
        < IpSearch setIpvalue={setIpvalue}/>
        <div className='
            p-5 absolute top-[calc(100%-150px)] z-10 
            bg-white rounded-2xl w-[90%] h-[300px]
            flex flex-col gap-4 items-center justify-center 
            md:flex-row md:max-h-[150px] md:top-[calc(100%-75px)]
            last:[&>*]:before:content-none
            '
        >
            {
                ipLocalization && (
                    <>
                        <AddressInfo text='ip address' info={ipLocalization.ip}/>
                        <AddressInfo text='location' info={ipLocalization.location.city}/>
                        <AddressInfo text='timezone' info={ipLocalization.location.timezone}/>
                        <AddressInfo text='isp' info={ipLocalization.isp}/>
                    </>
                )
            }
        </div>
    </header>
  )
}

export default Header