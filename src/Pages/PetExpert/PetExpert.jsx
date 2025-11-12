import React from 'react';

const experts = 
  [
    {
      id: 1,
      name: "Dr. Maya Green",
      specialization: "Veterinary Nutrition Specialist",
      image: "https://i.ibb.co.com/sv7KRcHV/Dark-haired-young-woman-with-a-nice-white-cat.jpg"
    },
    {
      id: 2,
      name: "Leo Fern",
      specialization: "Pet Grooming & Hygiene Expert",
      image: "https://i.ibb.co.com/QF2v3fv2/wx3a7623-crop.jpg"
    },
    {
      id: 3,
      name: "Ava Bloom",
      specialization: "Animal Behavior Consultant",
      image: "https://i.ibb.co.com/mVQbgj4N/dog-hug-2f174202e9cf4b36bc6c81b196a6d7bd.jpg"
    }
  ];







const PetExpert = () => {
    return (
        <div>
            <section className="py-12 px-6 ">
  <h2 className="text-3xl font-bold text-center  mb-10">
    Meet Our Pet Care Experts
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {experts.map((expert) => (
      <div
        key={expert.id}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-orange-100 overflow-hidden"
      >
        <img
          src={expert.image}
          alt={expert.name}
          className="w-full h-60 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-orange-600">{expert.name}</h3>
          <p className="text-gray-600 mt-1">{expert.specialization}</p>
          <div className="mt-4 flex justify-center">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium">
              Pet Expert
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

        </div>
    );
};

export default PetExpert;