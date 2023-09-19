import { useLoaderData } from "react-router-dom";
import Country from "./Country";

const AllCountrys = () => {
    const countrys = useLoaderData();
    return (
        <>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-4 p-5">
            {
                countrys.map((country,idx) => 
                    <Country
                    key={idx}
                    country={country}
                    ></Country>)
            }
            </div>
        </>
    );
};

export default AllCountrys;