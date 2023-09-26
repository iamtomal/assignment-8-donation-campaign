import swal from "sweetalert";

const DonationCategoryCard = ({category}) => {

    const {id, img, title, description, bg_color, font_bg, font_color, price} = category || {}
    const handleDonation = () =>{
        const addCategoryArray = [];
        const categoryItems = JSON.parse(localStorage.getItem('categories'))
        if(!categoryItems){
            addCategoryArray.push(category)
            localStorage.setItem('categories',JSON.stringify(addCategoryArray))
            swal("Good job!", "Your donation successful !", "success");
        }
        else{
            const isExists =categoryItems.find(category => category.id == id)
            
            if(!isExists){
                addCategoryArray.push(...categoryItems,category)
                localStorage.setItem('categories',JSON.stringify(addCategoryArray))
                swal("Good job!", "Your donation successful !", "success");
            }
            else{
                swal("Sorry!", "You already donate this.", "error");

            }
        }
    }

    return (
        <div className='flex flex-col justify-center items-center lg:mt-24'>
            <div className='relative'>
                <img className='absolute h-80 rounded-2xl' src={img}/>
            <div >
            <div className='bg-black h-20 rounded-b-2xl relative opacity-40 mt-60 '></div>
            <button onClick={handleDonation} className='absolute -mt-16 ml-4  text-white bg-red-500 p-3 rounded-md font-semibold'>Donate ${price}</button>
                
            </div>
            
                
            
            <div className='mt-10'>
            <p className='text-3xl font-bold mt-5'>{title}</p>
            <p className='text-sm text-gray-500 font-normal mt-4'>{description}</p>
            </div>
            </div>
            
        </div>
    );
};

export default DonationCategoryCard;