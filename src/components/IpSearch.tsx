import { useState } from 'react'
import ArrowIcon from '../assets/images/icon-arrow.svg'

type IpSearchProps = {
    setIpvalue : (arg: string) => void
}

const IpSearch = ({setIpvalue}: IpSearchProps) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const Ipregex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

        if(!Ipregex.test(value)) return setError('enter a valid ip address');

        setError('')
        setIpvalue(value)
    }
  return (
    <form 
        action="get"
        onSubmit={e => handleSubmit(e)}
        className='w-full max-w-[480px] gap-1 flex flex-col items-center'
    >
        <label htmlFor="ip" 
            className='
                w-full h-10  bg-white flex
                rounded-xl
                [&>*]:border-none
            '
        >
            <input type="text" name="" id="ip"
                onChange={e => setValue(e.currentTarget.value)}
                value={value}
                className='
                    w-[80%] px-8 bg-transparent
                '
            />
            <button
                type='submit' 
                className='w-[20%] bg-black rounded-r-xl cursor-pointer'

            >
                <img src={ArrowIcon} alt="icon arrow" />
            </button>
        </label>
        {
            error && 
                <span className=' uppercase text-center p-1 px-3 rounded-full bg-red-700 text-white'>
                    {error}
                </span>
        }
    </form>
  )
}

export default IpSearch