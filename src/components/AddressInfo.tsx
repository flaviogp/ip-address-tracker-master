
type AddressInfoProps = {
    text: string;
    info: string;
}

const AddressInfo = ({text, info}: AddressInfoProps) => {
  return ( 
    <div>
        <span>{text}</span>
        <p>{info}</p>
    </div>
  )
}

export default AddressInfo