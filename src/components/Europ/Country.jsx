const Country = ({country}) => {
    const{name,continents,flags,capital,area} = country
    const {common} = name;

    // console.log(flags.png,area,capital[0],continents[0])
    return (
        <div className=' border-2 border-yellow-400 flex flex-col items-center rounded-lg py-6'>
            <div className=' flex flex-grow'>
                <img src={flags.png} alt="" />
            </div>
            <h3>Name: {common} </h3>
            <p>Capital: {capital}</p>
            <p>Total Area: {area} SKm</p>
            <p>Continent: {continents}</p>
        </div>
    );
};

export default Country;