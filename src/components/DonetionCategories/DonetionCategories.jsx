/* eslint-disable react/prop-types */

import DonationsCard from "./DonationsCard";

const DonetionCategories = ({searchCard, donations}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
            {

                donations?.filter((item)=>{ 
                    return  searchCard === '' ? item 
                    : item.newCategory?.includes(searchCard)
                }).map( donation => <DonationsCard key={donation?.id} donation ={donation}></DonationsCard>)
            }
        </div>
    );
};

export default DonetionCategories;