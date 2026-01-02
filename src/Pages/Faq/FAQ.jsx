import React from "react";

const FAQ = () => {
  return (
    <section className="max-w-4xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      {/* FAQ 1 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3"
      >
        <div className="collapse-title font-semibold">
          How do I create an account on PawMart?
        </div>
        <div className="collapse-content text-sm">
          Click the <strong>Sign Up</strong> button in the top right corner, fill
          in your details, and complete the registration process.
        </div>
      </div>

      {/* FAQ 2 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3"
      >
        <div className="collapse-title font-semibold">
          Is pet adoption free on PawMart?
        </div>
        <div className="collapse-content text-sm">
          Yes, most pets are free to adopt. Some listings may include minimal
          care or vaccination fees depending on the seller or shelter.
        </div>
      </div>

      {/* FAQ 3 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3"
      >
        <div className="collapse-title font-semibold">
          How long does product delivery take?
        </div>
        <div className="collapse-content text-sm">
          Delivery usually takes <strong>2–5 working days</strong>, depending on
          your location and product availability.
        </div>
      </div>

      {/* FAQ 4 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3"
      >
        <div className="collapse-title font-semibold">
          Can I sell or list my pets or products?
        </div>
        <div className="collapse-content text-sm">
          Yes. After logging in, go to <strong>My Listings</strong> and click
          <strong> Add Listing</strong> to post your pets or products.
        </div>
      </div>

      {/* FAQ 5 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-base-100 border border-base-300"
      >
        <div className="collapse-title font-semibold">
          Is online payment secure on PawMart?
        </div>
        <div className="collapse-content text-sm">
          Absolutely. PawMart uses secure payment gateways to ensure your
          personal and payment information is fully protected.
        </div>
      </div>
    </section>
  );
};

export default FAQ;
