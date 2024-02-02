import '../App.css';



function Card(props) {

function handleClick() {
    props.setCountry(props.data)
}

return (
    <>
    <div className='bg-[#2b3945] shadow-[0_0_8px_1px_rgba(0,0,0,0.1)] cursor-pointer' onClick={handleClick}>
        <div className='flag'>
            <img src={props.data.flags.png} alt="" />
        </div>
        <div className='p-5'>
            <h4 className='font-semibold text-xl mb-4'>
                {props.data.name}
            </h4>
            <p>Population:
                <span className='text-gray-400'> {props.data.population}</span>
            </p>
            <p>
                Region:
                <span className='text-gray-400'> {props.data.region}</span>
            </p>
            <p>
                Capital:
                <span className='text-gray-400'> {props.data.capital}</span>
            </p>
        </div>
    </div>
    </>
);
}

export default Card;



