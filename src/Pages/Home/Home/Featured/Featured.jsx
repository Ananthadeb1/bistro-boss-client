import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-items bg-fixed text-gray-300 pt-8 my-20">
            <SectionTitle
            title={"Featured Item"}
            subTitle={"Check it out"}></SectionTitle>
            <div className="md:flex justify-center items-center py-20 pt-12 px-36 bg-stone-800 bg-opacity-60">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt fugiat temporibus, velit eos expedita in aliquam dignissimos? Rem repellendus nesciunt, unde deserunt modi blanditiis similique nobis eligendi commodi atque cupiditate ducimus incidunt quaerat quo, aliquam ipsam totam architecto officiis mollitia, quos laudantium explicabo aut! Omnis ipsum blanditiis similique dicta voluptatum!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;