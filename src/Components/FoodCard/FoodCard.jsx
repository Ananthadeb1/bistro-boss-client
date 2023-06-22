import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
    const {image, price , recipe, name, _id}= item;
    const {user} = useContext(AuthContext)
    const [,refetch] = useCart();
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = item =>{
        console.log(item)
        if(user && user.email){
          console.log(user)
          const cartItem ={menuItemId: _id,name,image,price,email:user.email}
          fetch('http://localhost:5000/carts',{
            method:'POST',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(cartItem)
          })
          

          .then(res=>res.json())
          .then(data =>{
            if(data.insertedId){
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Item added to the cart.',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })}
          
            else{
              
              Swal.fire({
                title: 'Please login to add the food.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'LogIn Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state: {from: location}});
                }
              })
            }
        }
      
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
            <button onClick={()=>handleAddToCart(item)} className="btn text-black btn-outline border-0 border-b-4 mt-4 border-orange-400 bg-slate-100">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
