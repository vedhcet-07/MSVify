import React from 'react';

const FooterNewsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Newsletter</h3>
      <p className="text-sm text-gray-400 mb-4">
        Subscribe to our newsletter for updates and exclusive content.
      </p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default FooterNewsletter;