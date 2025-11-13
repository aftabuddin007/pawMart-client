import React, { use, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router';

const NewUpdatePro = () => {
  const navigate = useNavigate()

const {user} = use(AuthContext);
const data = useLoaderData();

const [category,setCategory] = useState('')
const [price,setPrice] = useState('')


const item =data.result
//  console.log(item)
const handleSubmit=(e)=>{
e.preventDefault();
    const form  = e.target;

const formData = {
    name:form.name.value,
    category:form.category.value,
    price:parseInt(form.price.value),
    location:form.location.value,
    description:form.description.value,
    image:form.image.value,
    date:form.date.value,
    email:form.email.value,

}
// console.log({formData})
fetch(`https://pawmart-server-one.vercel.app/pet_product/${item._id}`,{
    method:'PUT',
    headers:{
        "content-type":"application/json",
    },
    body:JSON.stringify(formData)
}).then(res=>res.json())
.then(data=>{
    // console.log(data)
    toast.success("Product update Successfully.")
    navigate('/my-list')
})
.catch(err=>{
    console.log(err)
})




} 
const handleChangeCategory = (e)=>{
  const select = e.target.value;
  setCategory(select)
  if(select === 'Pets'){
    setPrice(0);
  }else{
    setPrice('');
  }
} 

    return (
        <div className='max-w-7xl mx-auto'>
                    <title>PawMart - Product Update Page</title>

            <div className=' rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-lg mx-auto'>
<h2 className='text-3xl font-bold text-center mb-10'>Modify Your Product</h2>

            {/* Update Form */}
    <form onSubmit={handleSubmit}  className="space-y-3">
      <div>
          <label className="block text-gray-600 mb-1">Product / Pet Name</label>
          <input
            type="text"
            name="name"
            defaultValue={item.name}
            placeholder="Enter product or pet name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-600 mb-1">Category</label>
          <select
            name="category"
            value={category}
            onChange={handleChangeCategory}
            defaultValue={item.category}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          >
            {/* <option value="">Select Category</option> */}
            <option value="Pets">Pets</option>
            <option value="Pet Food">Pet Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-600 mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={price}
            defaultValue={item.price}
            onChange={(e)=>setPrice(e.target.value)}
            placeholder="Enter price or 0 for pets"
            className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none
              ${category === 'Pets'?'bg-gray-100':''}`}
              readOnly={category === 'Pets'}
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-600 mb-1">Location</label>
          <input
            type="text"
            name="location"
            defaultValue={item.location}
            placeholder="Enter location"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-600 mb-1">Description</label>
          <textarea
            name="description"
            defaultValue={item.description}
            rows="3"
            placeholder="Write a short description"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-600 mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            defaultValue={item.image}
            placeholder="Enter image URL"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Date (Pick Up) */}
        <div>
          <label className="block text-gray-600 mb-1">Date (Pick Up)</label>
          <input
            type="date"
            name="date"
            defaultValue={item.date}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Email (readonly) */}
        <div>
          <label className="block text-gray-600 mb-1">Email (Your Account)</label>
          <input
            type="email"
            name="email"
            readOnly
            defaultValue={user?.email}
            className="w-full border border-gray-300 rounded-lg px-4 py-2  text-gray-500"
          />
        </div>

      <div className="flex justify-end pt-3">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition w-full"
        >
          Update
        </button>
      </div>
    </form>
  </div>

        </div>
    );
};

export default NewUpdatePro;