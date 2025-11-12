import React from 'react';
import { Heart, PawPrint, ShieldCheck } from "lucide-react";

const AdoptPet = () => {
    return (
        <div>
          
    <section className="py-16  ">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold mb-2">Why Adopt from PawMart?</h2>
        <p className="text-gray-600">
          Because every adoption gives a second chance — rescuing one life and opening space for another.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Card 1 */}
        <div className="border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full">
              <Heart className="text-green-600 w-10 h-10" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3">Save a Life</h3>
          <p className="text-gray-600">
            When you adopt, you’re giving a homeless pet a loving home — and helping reduce the number of animals in shelters.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full">
              <PawPrint className="text-green-600 w-10 h-10" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3">Support Rescue Efforts</h3>
          <p className="text-gray-600">
            Adopting helps reduce unethical breeding and animal exploitation — every adoption is a stand against cruelty.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full">
              <ShieldCheck className="text-green-600 w-10 h-10" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3">Ethical & Responsible</h3>
          <p className="text-gray-600">
            PawMart ensures safe, transparent adoptions — matching pets with caring adopters and promoting responsible pet ownership.
          </p>
        </div>
      </div>
    </section>
  


 
        </div>
    );
};

export default AdoptPet;