const FoodCard = ({item}) => {
    const {image, price , recipe, name}= item;
  return (
    <div>
      <div className="card w-96  shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 text-white bg-slate-900">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn text-black btn-outline border-0 border-b-4 mt-4 border-orange-400 bg-slate-100">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
