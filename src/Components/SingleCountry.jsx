import '../App.css';
import ArrowLeft from '../icons/arrowLeft.svg';


function SingleCountry({data, setCountry, findCountryByCioc}) {

function handleClick() {
    setCountry('back')
}

function handleBorderCountryClick(event) {
    findCountryByCioc(event.target.dataset.cioc)
}

let borderCountries
if(data.borders) {
    borderCountries = data.borders.map((cioc, index) => {
        console.log(cioc)
        if(index != 4) {
            return (
                <span data-cioc={cioc} className='leading-10 rounded-md shadow-[0_0_2px_1px_rgba(0,0,0,0.1)] px-6 py-1 mr-2 cursor-pointer' onClick={handleBorderCountryClick}>
                    {cioc}
                </span>
            )
        } else {
            return (
                <>
                <span data-cioc={cioc} className='leading-10 rounded-md shadow-[0_0_2px_1px_rgba(0,0,0,0.1)] px-6 py-1 mr-2 cursor-pointer' onClick={handleBorderCountryClick}>
                    {cioc}
                </span>
                <br />
                </>
            )
        }
    })
}

return (
    <div className='main px-20 py-10'>
        <div className=''>
            <button className='py-2 px-8 rounded-md shadow-[0_0_8px_1px_rgba(0,0,0,0.1)]' onClick={handleClick}>
                <img className='inline w-3 mr-2' src={ArrowLeft} alt="" />
                Back
            </button>
        </div>
        <div className='pt-20 grid grid-cols-2'>
            <div className='mr-28'>
                <img src={data.flag} alt="" />
            </div>
            <div className='py-5'>
                <h2 className='font-semibold text-3xl mb-5'>
                    {data.name}
                </h2>
                <div className='grid grid-cols-2'>
                    <div>
                        <span className=''>Native Name:</span>
                        <span>{data.nativeName}</span>
                        <br />
                        <span className=''>Population:</span>
                        <span>{data.population}</span>
                        <br />
                        <span className=''>Region:</span>
                        <span>{data.region}</span>
                        <br />
                        <span className=''>Sub Region:</span>
                        <span>{data.subregion}</span>
                        <br />
                        <span className=''>Capital:</span>
                        <span>{data.capital}</span>
                    </div>
                    <div>
                        <span className=''>Top Level Domain:</span>
                        <span>{data.topLevelDomain}</span>
                        <br />
                        <span className=''>Currencies:</span>
                        <span>{data.currencies[0].name}</span>
                        <br />
                        <span className=''>Language:</span>
                        <span>{data.languages[0].name}</span>
                    </div>
                </div>
                {borderCountries ? (
                    <div className='mt-10'>
                        <span className='mr-5'>Border Countries:</span>{borderCountries}
                    </div>)
                : null}
            </div>
        </div>

    </div>
);
}

export default SingleCountry;
