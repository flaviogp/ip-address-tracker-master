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
        flex flex-col items-center
        relative p-5  gap-5
        '
    >
        <h1 className='text-white'>IP Adress Tracker</h1>
        < IpSearch setIpvalue={setIpvalue}/>
        <div className='
            p-5 absolute top-[calc(100%-150px)] z-10 
            bg-white rounded-2xl
            flex flex-col gap-4 items-center justify-center 
            w-[90%] h-[300px]
            [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:text-center [&>*]:gap-1
            [&>*>span]:text-tw-dark-gray [&>*>span]:font-bold [&>*>span]:uppercase [&>*>span]:text-xs
            [&>*>p]:text-tw-very-dark-gray [&>*>p]:font-bold [&>*>p]:text-lg
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