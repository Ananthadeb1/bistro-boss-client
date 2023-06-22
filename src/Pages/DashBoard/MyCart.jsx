import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart,refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete=(item)=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/carts/${item._id}`,{
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
            if(data.deletedCount >0){
                refetch();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
          })
        }
      })
  }
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">Total items: {cart.length}</h3>
        <h3 className="text-3xl">Total items: {totalPrice}</h3>
        <button className="btn btn-warning btn-sm">PAY</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-slate-200 text-black">
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item,index)=> <tr 
              key={item._id}>
                <td>
                  {index+1}
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td>Purple</td>
                <td className="text-end">
                  ${item.price}
                </td>
                <button onClick={()=>handleDelete(item)} className="btn btn-ghost  mt-3 text-white bg-red-600"><FaTrashAlt></FaTrashAlt></button>
              </tr>)
            } 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
