// ProfilePage.jsx
import React, { use, useState } from 'react';
import { Camera, Mail, Phone, User, Briefcase } from 'lucide-react';
import { AuthContext } from '../../Providers/AuthProvider';

const ProfilePage = () => {
    const {user} = use(AuthContext)
    // console.log(user)
  const [userData, setUserData] = useState({
    name: user?.displayName,
    email: user?.email,
    mobile: '+880 1877777777',
    role: 'User',
    profileImage: user?.photoURL || 'https://via.placeholder.com/150',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData(prev => ({ ...prev, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    alert('Profile saved!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold ">My Profile Page</h1>
        <p className="text-gray-600 mt-2">Preview</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Photo Upload */}
        <div className="lg:col-span-1">
          <div className="rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold  mb-6">Your Photo</h2>
            <p className=" text-sm mb-6">This will be displayed on your profile</p>
            
            <div className="flex flex-col items-center">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden  border-4 border-white shadow-lg">
                  <img 
                    src={userData.profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-2 right-2 bg-blue-600 rounded-full p-2 shadow-lg">
                  <Camera className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Upload Button */}
              <label className="w-full">
                <input 
                  type="file" 
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <div className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-center font-medium">
                  Upload New
                </div>
              </label>

              {/* Save Button */}
              <button 
                onClick={handleSave}
                className="w-full mt-4 bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-black transition-colors font-medium"
              >
                Save
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Personal Information */}
        <div className="lg:col-span-2">
          <div className=" rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold  mb-6">Personal information</h2>
            
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium  mb-2">
                  Full Name
                </label>
                <div className="flex items-center p-4  rounded-lg border border-gray-200">
                  <User className="w-5 h-5 t mr-3" />
                  <span className="">{userData.name}</span>
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium  mb-2">
                  Email address
                </label>
                <div className="flex items-center p-4  rounded-lg border border-gray-200">
                  <Mail className="w-5 h-5  mr-3" />
                  <span className="">{userData.email}</span>
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium  mb-2">
                  Mobile number
                </label>
                <div className="flex items-center p-4 rounded-lg border border-gray-200">
                  <Phone className="w-5 h-5  mr-3" />
                  <div className="flex items-center">
                    <div className="flex items-center border-r border-gray-200 pr-3 mr-3">
                      <span className="">+880</span>
                      <svg className="w-4 h-4  ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <span className="">{userData.mobile.split(' ')[1]}</span>
                  </div>
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium  mb-2">
                  Role
                </label>
                <div className="flex items-center p-4  rounded-lg border border-gray-200">
                  <Briefcase className="w-5 h-5  mr-3" />
                  <span className="">{userData.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;