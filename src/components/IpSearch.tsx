import { useState } from 'react'
import ArrowIcon from '../assets/images/icon-arrow.svg'

type IpSearchProps = {
    setIpvalue : (arg: string) => void
}

const IpSearch = ({setIpvalue}: IpSearchProps) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIpvalue(value)
    }
  return (
    <form 
        action="get"
        onSubmit={e => handleSubmit(e)}
    >
        <label htmlFor="ip" 
            className='
                w-full max-w-[480px] h-10  bg-white flex
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

    </form>
  )
}

export default IpSearch