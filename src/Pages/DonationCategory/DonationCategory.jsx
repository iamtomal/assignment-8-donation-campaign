import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCategoryCard from "./DonationCategoryCard";

const DonationCategory = () => {

    const [category, setCategory] = useState();
    const {id} = useParams();
    const categories = useLoaderData();

    useEffect(()=>{
        const findCategory = categories.find(category=> category.id == id)
        setCategory(findCategory);
    },[id,categories])

    return (
        <div>
            <DonationCategoryCard category={category}></DonationCategoryCard>
        </div>
    );
};

export default DonationCategory;