import { Link } from "react-router-dom";

const DonationsCard = ({donation}) => {
const {id, img, title, bg_color, font_bg, font_color, newCategory} = donation || {}

  return (
    <div>
    <Link to={`/donations/${id}`}>
      <div style={{background:bg_color}} className="flex  flex-col rounded-lg">
        <div className="rounded-lg  ">
          <img
            src={img}
            className="h-full w-full"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p style={{background: font_bg, color: font_color}} className="px-3 rounded-md font-semibold text-sm">
              {newCategory}
            </p>
          </div>
          <p style={{color: font_color}} className="font-bold text-xl">
            {title}
          </p>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default DonationsCard;
