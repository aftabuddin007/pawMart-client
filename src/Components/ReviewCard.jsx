// HomeReview.js
import React from "react";
import Marquee from "react-fast-marquee";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// Fake reviews data
const fakeReviews = [
  {
    reviewerName: "Sakib",
    reviewerImage: "https://i.pravatar.cc/150?img=11",
    rating: 4.5,
    comment:
      "The meal was good overall, but I felt the seasoning could be a bit stronger to bring out the flavors more. The portion size and presentation were nice.",
    date: "12/18/2025",
  },
  {
    reviewerName: "Ayesha Rahman",
    reviewerImage: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    comment:
      "Absolutely loved the service! Fast delivery and the quality exceeded my expectations.",
    date: "12/20/2025",
  },
  {
    reviewerName: "Tanvir Hasan",
    reviewerImage: "https://i.pravatar.cc/150?img=14",
    rating: 4,
    comment:
      "Very good experience overall. The packaging was clean and the product was fresh.",
    date: "12/21/2025",
  },
  {
    reviewerName: "Nusrat Jahan",
    reviewerImage: "https://i.pravatar.cc/150?img=45",
    rating: 4.8,
    comment:
      "User-friendly website and trustworthy platform. I will definitely order again.",
    date: "12/22/2025",
  },
  {
    reviewerName: "Imran Hossain",
    reviewerImage: "https://i.pravatar.cc/150?img=56",
    rating: 4.2,
    comment:
      "Good quality products with reasonable pricing. Delivery was on time.",
    date: "12/23/2025",
  },
];

// Review card component
// const Review = ({ reviewerName, reviewerImage, rating, comment, date }) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 !== 0;

//   return (
//     <div className=" bg-white shadow-lg rounded-xl p-4 sm:p-6 
//                       max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-2">
//       {/* Header */}
//       <div className="flex items-center gap-4 mb-4">
//         <img
//           src={reviewerImage}
//           alt={reviewerName}
//           className="w-12 h-12 rounded-full object-cover"
//         />
//         <div>
//           <h4 className="font-semibold text-slate-800">{reviewerName}</h4>
//           <p className="text-sm text-gray-500">{date}</p>
//         </div>
//       </div>

//       {/* Rating */}
//       <div className="flex items-center gap-1 mb-3 text-yellow-400">
//         {Array(fullStars)
//           .fill()
//           .map((_, i) => (
//             <FaStar key={i} />
//           ))}
//         {hasHalfStar && <FaStarHalfAlt />}
//         <span className="ml-2 text-sm text-slate-700 font-medium">{rating}</span>
//       </div>

//       {/* Comment */}
//       <p className="text-gray-600 text-sm leading-relaxed">{comment}</p>
//     </div>
//   );
// };
const Review = ({ reviewerName, reviewerImage, rating, comment, date }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className=" shadow-md rounded-lg p-3 sm:p-4 md:p-5 max-w-[260px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] mx-2">
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <img
          src={reviewerImage}
          alt={reviewerName}
          className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-xs sm:text-sm md:text-base ">{reviewerName}</h4>
          <p className="text-[10px] sm:text-xs md:text-sm ">{date}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-2 text-yellow-400">
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={i} className="text-xs sm:text-sm md:text-base" />
          ))}
        {hasHalfStar && <FaStarHalfAlt className="text-xs sm:text-sm md:text-base" />}
        <span className="ml-1 text-[10px] sm:text-xs md:text-sm text-slate-700 font-medium">{rating}</span>
      </div>

      {/* Comment */}
      <p className=" text-[10px] sm:text-xs md:text-sm leading-snug sm:leading-tight md:leading-relaxed">
        {comment}
      </p>
    </div>
  );
};


// Main component with Marquee
const HomeReview = () => {
  return (
    <div className=" py-10">
      <h2 className="text-3xl font-bold text-center mb-12 ">
        What Our Happy Customers Say?
      </h2>

      <Marquee
        pauseOnHover={true}
        speed={50}
        gradient={true}
        gradientColor={[249, 250, 251]}
      >
        {fakeReviews.map((r, index) => (
          <Review
            key={index}
            reviewerName={r.reviewerName}
            reviewerImage={r.reviewerImage}
            rating={r.rating}
            comment={r.comment}
            date={r.date}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default HomeReview;
