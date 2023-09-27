
const DonationCard = ({category}) => {
    console.log(category);

    const {id, img, title, bg_color, font_bg, font_color, price, newCategory} = category || {}
  

    return (
        <div style={{background:bg_color}} className='flex items-center gap-5 rounded-xl'>
            <div className=''>
                <img className='h-40 w-44 rounded-l-xl' src={img}/>
            </div>
            
                
            
            <div className=''>
            <p style={{background: font_bg, color: font_color}} className="px-3 rounded-md font-semibold text-sm w-max mt-2">
              {newCategory}
            </p>
            <p className='text-xl font-bold mt-1'>{title}</p>
            <p style={{color: font_color}} className='text-sm font-bold mt-1'>${price}.00</p>
            <p style={{background: font_color}} className='text-sm font-semibold mt-3 w-max p-2 rounded-lg text-white'>View Details</p>
            </div>
            
        </div>
        
            
        
    );
};

export default DonationCard;