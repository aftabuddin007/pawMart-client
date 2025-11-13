import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import Loading from '../Loading/Loading';

const MyListing = () => {

  const {user}=use(AuthContext)
    const [orders,setOrders] = useState([])
        const [loading,setLoading] = useState(true)
  
        useEffect(()=>{
          fetch(`https://pawmart-server-one.vercel.app/pet_products?email=${user?.email}`,{
            headers:{
        authorization:`Bearer ${user.accessToken}`

      }
          })
          .then(res=>res.json())
          .then(data=>{
            // console.log(data)
            setOrders(data)
            setLoading(false)
          })
        },[user])


        if(loading){
           return <Loading></Loading> 
        }
 const handleDelete = (id) =>{
 Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {



    fetch(`https://pawmart-server-one.vercel.app/pet_product/${id}`,{
        method:'DELETE',
        headers:{
            "content-type":"application/json",
        },
        
    }).then(res=>res.json())
    .then(data=>{
        // console.log(data)
 setOrders(orders.filter(item => item._id !== id));

        Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    })
    .catch(err=>{
        console.log(err)
    })

    
  }
});
  
}
 
    
    return (
        <div className="overflow-x-auto  rounded-2xl shadow-lg p-4 max-w-7xl mx-auto mb-20">
                    <title>PawMart - My List</title>
<h2 className='text-3xl font-bold text-center mb-10'>My Listing</h2>

      <table className="min-w-full text-sm text-left">
        <thead className="  uppercase text-xs">
          <tr>
            <th className="py-3 px-4">SL No</th>
            <th className="py-3 px-4">Image</th>
            <th className="py-3 px-4">Product Name</th>
            <th className="py-3 px-4">Category</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((item, index) => (
            <tr key={item._id} className="border-b  transition">
              <td className="py-3 px-4">{index + 1}</td>

              <td className="py-3 px-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-md object-cover"
                />
              </td>

              <td className="py-3 px-4 font-medium">{item.name}</td>
              <td className="py-3 px-4">{item.category}</td>
              <td className="py-3 px-4">${item.price}</td>

              <td className="py-3 px-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  item.status === "Sold"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}>
                  {item.status || "Pending"}
                </span>
              </td>

              <div className="py-3 px-4 flex items-center gap-2 justify-center">
<Link to={`/update-product/${item._id}`}
  className="border border-blue-400 text-blue-500 hover:bg-blue-500
   hover:text-white px-3 py-1 rounded-md text-xs transition">
   Edit </Link>
<button onClick={()=>handleDelete(item._id)} className="border border-red-400
 text-red-500 hover:bg-red-500 hover:text-white px-3 py-1
  rounded-md text-xs transition">Delete</button>
                
              </div>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    );
};

export default MyListing;
