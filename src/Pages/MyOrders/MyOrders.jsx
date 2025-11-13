import React, { use,  useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Loading from '../Loading/Loading';
import jsPDF from 'jspdf';
// import 'jspdf-autotable';
import  'jspdf-autotable'
import autoTable from 'jspdf-autotable';

const MyOrders = () => {
    const {user} = use(AuthContext)
    // console.log(user?.email)
    const [orders,setOrders] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
      fetch(`http://localhost:3000/orders?email=${user?.email}`,{
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
    const downloadPdf = ()=>{
      const doc = new jsPDF()
      doc.text('My Orders - pawMart',14,15)
      const tableColumn=[
        'Product/Listing Name',
        	'Buyer Name',
          'Price',
          	'Quantity',
            	'Address',
              	'Date',
                '	Phone',
      ];
const tableRow = orders.map((order)=>[
  order.productName,
  order.buyerName,
  `$${order.price}`,
  order.quantity,
  order.address,
  order.date,
  order.phone,
]);     
autoTable(doc,{
  head:[tableColumn],
  body:tableRow,
  startY: 25,
  styles: { fontSize: 10, cellPadding: 3 },
  headStyles: { fillColor: [52, 73, 94] },

});
doc.save('MyOrders.pdf');

// console.log('e')




    }
    return (
        <div className='max-w-7xl mx-auto my-10'>
             <div className="overflow-x-auto">
                        <title>PawMart - My Order</title>
<h2 className='text-3xl font-bold text-center mb-10'>My Orders</h2>
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="">
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
                    className=" transition-colors duration-200"
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
<div className='text-center my-8'>
          <button onClick={downloadPdf} className='btn btn-primary '>Download to Pdf</button>

</div>
        </div>
    );
};

export default MyOrders;