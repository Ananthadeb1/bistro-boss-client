import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Routes/Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const PopularItems = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12 ">
      <SectionTitle
        title={"From our Menu"}
        subTitle={"Popular Items"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {PopularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="btn text-black justify-center btn-outline border-0 border-b-4 mt-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
