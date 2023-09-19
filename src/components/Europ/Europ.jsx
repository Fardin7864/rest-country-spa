import { useLoaderData } from "react-router-dom";
import Country from "./Country";

const Europ = () => {
    const countryOfEurop = useLoaderData();
    return (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 p-5">
            {
                countryOfEurop.map(country => <Country
                key={country.cca3}
                country = {country}
                ></Country>)
            }
        </div>
    );
};

export default Europ;