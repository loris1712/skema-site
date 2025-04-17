"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

const Signup = () => {
  const [formData, setFormData] = useState({
    phone_number: "",
    instagram: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Risolve problemi di hydration in Next.js
  }, []);

  if (!hydrated) return null; // Evita il mismatch tra SSR e CSR

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("users").insert([formData]);

    if (error) {
      setMessage("Error saving data: " + error.message);
    } else {
      setMessage("Saved successfully!");
      setFormData({ phone_number: "", instagram: "", email: "" });
    }

    setLoading(false);
  };

  return (
    <section className="flex md:flex-row flex-col items-center gap-8 p-8 md:px-24 bg-white">
      {/* Left Side - Title & Description */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-black mb-4">Join Us Today!</h2>
        <p className="text-gray-600">
          Enter your details to stay updated and be part of the experience.
        </p>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Phone Number */}
          <div>
            <label className="text-sm text-gray-700 block mb-1">Phone Number</label>
            <input
              type="text"
              name="phone_number"
              placeholder="+39 123 456 7890"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-full text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Instagram */}
          <div>
            <label className="text-sm text-gray-700 block mb-1">Instagram</label>
            <input
              type="text"
              name="instagram"
              placeholder="@yourusername"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full text-black  p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-700 block mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-black  p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>

          {/* Success/Error Message */}
          {message && <p className="text-center text-sm text-gray-700 mt-2">{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default Signup;
