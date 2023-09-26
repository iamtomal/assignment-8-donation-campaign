import { useLoaderData } from "react-router-dom";
import DonetionCategories from "../../components/DonetionCategories/DonetionCategories";
import Banner from "../../components/Header/Banner/Banner";


const Home = () => {
    const donations = useLoaderData();

    return (
        <div>
            <Banner></Banner>

            <DonetionCategories donations = {donations}></DonetionCategories>
        </div>
    );
};

export default Home;