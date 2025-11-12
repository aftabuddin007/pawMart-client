import React from 'react';

const Community = () => {
    return (
        <div>
             <div
      className="h-[400px] relative flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/WNLvQWHs/fuzzy-rescue-e8-DXpv-Cvj-Y-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-white px-4">
        <h2 className="text-3xl font-bold mb-2">Join PawMart Community</h2>
        <p className="mb-5 text-sm md:text-base">
          Get pet care tips and fresh updates straight to your inbox.
        </p>

        <div className="join flex justify-center">
          <input
            type="email"
            placeholder="mail@site.com"
            required
            className="input input-bordered join-item text-black bg-white"
          />
          <button className="btn btn-success join-item">Join</button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Community;