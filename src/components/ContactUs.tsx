"use client";
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-screen-md mx-auto mt-10 p-8 bg-trueGray-800 rounded-lg shadow-lg text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Fill Out The Form!</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-700 bg-gray-700 focus:outline-none focus:ring-indigo-800 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows={5}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 text-lg font-semibold rounded-md shadow-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
