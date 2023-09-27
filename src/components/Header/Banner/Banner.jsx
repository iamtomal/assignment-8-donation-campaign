import { useState } from "react";
import DonetionCategories from "../../DonetionCategories/DonetionCategories";

// eslint-disable-next-line react/prop-types
const Banner = ({donations}) => {


    const [searchCard, setSearchCard] = useState([])
    const handleSearch = e =>{
        e.preventDefault();
        setSearchCard(e.target.name.value);
        
    }


    return (
        <><div className="text-center">
            <img className="relative w-full opacity-10" src="https://i.ibb.co/80yL9D1/balloons-charity-colorful-colourful.jpg" />

            <div className=" absolute -mt-80 ml-64">
                <p className="text-5xl  text-center font-bold">I Grow By Helping People In Need
                </p>

                <form onSubmit={handleSearch}>
                <input className="pl-5 py-2.5 border mt-8 w-96 rounded-l-lg" type="search" id="search" name="name" placeholder="Search here ..."></input>
                <button className="text-lg bg-red-500 py-2 px-6 rounded-r-lg font-semibold text-white" type="submit">Search</button>
                </form>

            </div>

        </div>
        <DonetionCategories searchCard={searchCard} donations={donations}></DonetionCategories></>
    );
};



export default Banner;