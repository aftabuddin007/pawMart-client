import React, { use } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const AddListPet = () => {
const {user} = use(AuthContext)
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
fetch('http://localhost:3000/pet_product',{
    method:'POST',
    headers:{
        "content-type":"application/json",
    },
    body:JSON.stringify(formData)
}).then(res=>res.json())
.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})




}









    return (
        <div>
           <h2>Add Your Product</h2>
           <div>
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
        Add Product / Pet
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Product / Pet Name */}
        <div>
          <label className="block text-gray-600 mb-1">Product / Pet Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter product or pet name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-600 mb-1">Category</label>
          <select
            name="category"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          >
            <option value="">Select Category</option>
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
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
            placeholder="Enter price or 0 for pets"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-600 mb-1">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-600 mb-1">Description</label>
          <textarea
            name="description"
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
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-gray-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add Now
          </button>
        </div>
      </form>
    </div>
           </div>
        </div>
    );
}

export default AddListPet;