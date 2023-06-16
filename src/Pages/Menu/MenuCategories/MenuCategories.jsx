import { Link } from "react-router-dom";
import Cover from "../../../Routes/Shared/Cover/Cover";
import MenuItem from "../../../Routes/Shared/MenuItem/MenuItem";

const MenuCategories = ({ items ,img,title}) => {
  return (
    <div className="pt-8">
      { title &&
        <Cover img={img}
      title={title}></Cover>
      }
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
     <Link to={`/order/${title}`}>  <button className="btn text-black btn-outline border-0 border-b-4 mt-4">Order Now</button> </Link>
    </div>
  );
};

export default MenuCategories;
