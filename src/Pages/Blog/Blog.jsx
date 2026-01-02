import React from 'react';
import { CalendarDays, User, ArrowRight } from 'lucide-react';

// Simple blog data
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for New Puppy Owners",
    excerpt: "Bringing home a new puppy is exciting! Learn the essential tips for training, feeding, and caring for your new furry family member. From crate training to socialization, we cover everything you need to know.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    category: "Dog Care",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    layout: "left" // Image on left, content on right
  },
  {
    id: 2,
    title: "Choosing the Right Cat Food",
    excerpt: "Understanding the nutritional needs of your feline friend and making the best choice between wet and dry food options. Learn about protein requirements, hydration needs, and special dietary considerations.",
    author: "Emma Rodriguez",
    date: "March 10, 2024",
    category: "Nutrition",
    image: "https://i.ibb.co.com/3506bFRh/Untitled.png",
    layout: "right" // Image on right, content on left
  },
  {
    id: 3,
    title: "Bird Grooming Basics",
    excerpt: "Proper grooming techniques for your feathered friends to keep them healthy and happy. Learn about feather care, beak maintenance, and nail trimming for different bird species.",
    author: "Michael Chen",
    date: "March 5, 2024",
    category: "Bird Care",
    image: "https://images.unsplash.com/photo-1480044965905-02098d419e96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    layout: "left"
  },
  {
    id: 4,
    title: "Creating the Perfect Aquarium",
    excerpt: "Learn how to set up and maintain a healthy aquarium for your fish to thrive in. From water chemistry to plant selection, we guide you through creating a beautiful aquatic environment.",
    author: "Lisa Wang",
    date: "February 28, 2024",
    category: "Fish Care",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    layout: "right"
  },
  {
    id: 5,
    title: "Hamster Habitats Guide",
    excerpt: "Everything you need to know about setting up the perfect habitat for your hamster. Learn about cage size, bedding options, enrichment activities, and safe toys for your small pet.",
    author: "Tom Wilson",
    date: "February 20, 2024",
    category: "Small Pets",
    image: "https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    layout: "left"
  },
  {
    id: 6,
    title: "Pet Dental Health Matters",
    excerpt: "Dental care is crucial for pets. Learn about common issues and preventive measures to keep your pet's teeth healthy. Discover brushing techniques and dental treat recommendations.",
    author: "Dr. Sarah Johnson",
    date: "February 15, 2024",
    category: "Health",
    image: "https://i.ibb.co.com/Q78s7Rnz/2-18-Blackwood-Animal-Hospital-S.png",
    layout: "right"
  }
];

const SimpleBlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Pawmart Pet Care Blog</h1>
            <p className="text-lg text-blue-100">
              Simple tips and guides for happy, healthy pets
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Blog Posts */}
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                  post.layout === 'right' ? 'md:flex-row-reverse' : ''
                } md:flex`}
              >
                {/* Image Section */}
                <div className="md:w-2/5">
                  <div className="h-64 md:h-full relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                      {post.category}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <div className="flex items-center mr-4">
                      <User size={16} className="mr-1" />
                      <span className="text-sm">{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarDays size={16} className="mr-1" />
                      <span className="text-sm">{post.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group">
                    Read Full Article
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          
        </div>
      </main>

     
     
    </div>
  );
};

export default SimpleBlogPage;