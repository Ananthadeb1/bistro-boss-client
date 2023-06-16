import { Helmet } from "react-helmet-async";
import Cover from "../../../Routes/Shared/Cover/Cover";
import menuImg from "../../../assets/menu/menu-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategories from "../MenuCategories/MenuCategories";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>
      {/* main cover  */}
      <SectionTitle
        title={"Today's offer"}
        subTitle={"Don't Miss"}
      ></SectionTitle>
      {/* offered items  */}
      <MenuCategories items={offered}></MenuCategories>
      {/* dessert menu items  */}
      <MenuCategories items={desserts} title="dessert" img={dessertImg}></MenuCategories>
      {/* pizza items  */}
      <MenuCategories items={pizzas} title="pizza" img={pizzaImg}></MenuCategories>
      {/* salad items  */}
      <MenuCategories items={salads} title="salad" img={saladImg}></MenuCategories>
      {/* soup items  */}
      <MenuCategories items={soups} title="soup" img={soupImg}></MenuCategories>
    </div>
  );
};

export default Menu;
