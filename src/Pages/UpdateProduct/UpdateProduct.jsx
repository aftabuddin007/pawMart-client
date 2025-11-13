import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';

const UpdateProduct = () => {
  const nevigate = useNavigate()
    const {user} = use(AuthContext)
    // console.log(user)
    const data = useLoaderData()
    const update = data.result
        const {name,price,_id,} = update;

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = {
            productId: form.productId.value,
productName: form.productName.value,
buyerName: form.buyerName.value,
email: form.email.value,
quantity: parseInt(form.quantity.value),
price: parseInt(form.price.value),
address: form.address.value,
phone: form.phone.value,
date: form.date.value,
additionalNotes: form.notes.value


        }
//  console.log({formData})
 fetch('https://pawmart-server-one.vercel.app/orders',{
    method:'POST',
    headers:{
        "content-type":"application/json",
    },
    body:JSON.stringify(formData)
}).then(res=>res.json())
.then(data=>{
    // console.log(data)
    toast.success('Your Order is Placed Successfully')
    nevigate('/')

})
.catch(err=>{
    console.log(err)
})

    }


    return (
        <div>
                    <title>PawMart - Create Order</title>

              <div className=" rounded-2xl shadow-lg p-6 w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold  text-center mb-5">
        Place Your Order
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Buyer Name */}
        <div>
          <label className="block text-gray-600 mb-1">Buyer Name</label>
          <input
            type="text"
            name="buyerName"
            defaultValue={user?.displayName}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-3 py-2  text-gray-600"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={user.email}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-3 py-2  text-gray-600"
          />
        </div>

        {/* Product/Listing ID */}
        <div>
          <label className="block text-gray-600 mb-1">Product / Listing ID</label>
          <input
            type="text"
            name="productId"
            defaultValue={_id}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-3 py-2  text-gray-600"
          />
        </div>

        {/* Product/Listing Name */}
        <div>
          <label className="block text-gray-600 mb-1">Product / Listing Name</label>
          <input
            type="text"
            name="productName"
            defaultValue={name}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-3 py-2  text-gray-600"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-gray-600 mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            value="1"
            min="1"
            readOnly
            className="w-full border border-gray-300 rounded-lg px-3 py-2  text-gray-600"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-600 mb-1">Price</label>
          <input
            type="text"
            name="price"
            defaultValue={price}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-3 py-2  text-gray-600"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-600 mb-1">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter your delivery address"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Date (Pick Up) */}
        <div>
          <label className="block text-gray-600 mb-1">Date (Please Pick a date) </label>
          <input
            type="date"
            name="date"
            // defaultValue={date}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-600 mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-gray-600 mb-1">Additional Notes</label>
          <textarea
            name="notes"
            rows="3"
            placeholder="Any extra instructions or notes..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button (Design Only) */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default UpdateProduct;