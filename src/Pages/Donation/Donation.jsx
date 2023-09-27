import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {

    const [donation, setDonation] = useState([])
    const [noFound, setNoFound] = useState(false)
    const [isShow, setIsShow] = useState(4)

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('categories'))
        
        if(donationItems){
            setDonation(donationItems)
        }
        else{
            setNoFound("No donation found yet !");
        }
    },[]);

    return (
        <div>
            {noFound ? <p className="text-5xl font-bold lg:font-extrabold text-slate-300 text-center mt-40 md:mt-48 lg:mt-80 ">{noFound}</p> : 
            <><div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-5">

                    {
                    donation.slice(0,isShow).map(category => <DonationCard key={category.id} category={category}></DonationCard>
                    )
                    }

                </div>
                <div>
                    
                        <div className={`flex justify-center mt-5 ${isShow == donation.length  && 'hidden'}`}>

                        { donation.length > 4 &&
                          <button onClick={()=>setIsShow(donation.length)} className='bg-green-600 text-md font-semibold mt-3 w-max p-3 rounded-lg text-white'>See More</button>
                        }
                </div>
                   
                </div>
                </>
            }
        </div>
    );
};

export default Donation;