import React, { use,  useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const MyOrders = () => {
    const {user} = use(AuthContext)
    // console.log(user?.email)
    const [orders,setOrders] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
      fetch(`http://localhost:3000/orders?email=${user?.email}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setOrders(data)
        setLoading(false)
      })
    },[user])
    if(loading){
       return <p>loading....</p> 
    }
    return (
        <div>
             <div className="overflow-x-auto">
                        <title>PawMart - My Order</title>

            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Product/Listing Name</th>
                  <th className="px-4 py-2 border">Buyer Name</th>
                  <th className="px-4 py-2 border">Price</th>
                  <th className="px-4 py-2 border">Quantity</th>
                  <th className="px-4 py-2 border">Address</th>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Phone</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) =>(
                 
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-4 py-2 border text-center">
                      {order.productName}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      {order.buyerName}
                    </td>
                    <td className="px-4 py-2 border text-center text-green-600 font-semibold">
                      ${order.price}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      {order.quantity}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      {order.address}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      {order.date}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      {order.phone}
                    </td>
                  </tr>))
}
              </tbody>
            </table>
        </div>
        </div>
    );
};

export default MyOrders;