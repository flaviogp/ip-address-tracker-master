
type AddressInfoProps = {
    text: string;
    info: string;
}

const AddressInfo = ({text, info}: AddressInfoProps) => {
  return ( 
    <div 
      className="
      flex flex-col items-center text-center gap-1 relative w-[200px]
      md:items-start md:text-start md:before:content-[''] md:before:absolute md:before:right-2 md:before:top-0 md:before:w-[.1rem] md:before:h-full md:before:bg-tw-dark-gray
      ">
        <span className=" text-tw-dark-gray font-bold uppercase text-xs">
          {text}
        </span>
        <p className="text-tw-very-dark-gray font-bold text-lg
">
          {info}
        </p>
    </div>
  )
}

export default AddressInfo