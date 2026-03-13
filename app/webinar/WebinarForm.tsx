"use client";
import { useState } from "react";

export default function WebinarForm() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    profession: ""
  });

  const handleChange = (e:any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const formData = new FormData();

    // Replace these entry IDs with your Google Form entry IDs
    formData.append("entry.1862617466", form.name);
    formData.append("entry.1913439724", form.phone);
    formData.append("entry.2052950666", form.email);
    formData.append("entry.1098219313", form.profession);

    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLScCsQGdvOcUNdw6IazOnVmht34J0fWN8fkI950TH_LK3vMx3A/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData
      }
    );

    alert("Registration Successful!");

    setForm({
      name: "",
      phone: "",
      email: "",
      profession: ""
    });
  };

  return (
    <div className="w-full bg-[#1c1c1c] text-white rounded-[20px] md:rounded-[24px] px-6 md:px-10 py-8 shadow-2xl">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6 tracking-tight">
        Register for the Webinar
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
      >

        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400 font-medium">Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter your full name"
            required
            className="bg-[#2a2a2a] text-white placeholder-gray-500 rounded-[12px] px-4 py-3 text-base outline-none border border-transparent focus:border-[#5EBA3F]"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400 font-medium">Phone Number</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Enter your phone number"
            required
            className="bg-[#2a2a2a] text-white placeholder-gray-500 rounded-[12px] px-4 py-3 text-base outline-none border border-transparent focus:border-[#5EBA3F]"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400 font-medium">Email Address</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email address"
            required
            className="bg-[#2a2a2a] text-white placeholder-gray-500 rounded-[12px] px-4 py-3 text-base outline-none border border-transparent focus:border-[#5EBA3F]"
          />
        </div>

        {/* Profession */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400 font-medium">Profession</label>
          <input
            name="profession"
            value={form.profession}
            onChange={handleChange}
            type="text"
            placeholder="e.g. Student, Business Owner..."
            required
            className="bg-[#2a2a2a] text-white placeholder-gray-500 rounded-[12px] px-4 py-3 text-base outline-none border border-transparent focus:border-[#5EBA3F]"
          />
        </div>

        {/* Submit */}
        <div className="sm:col-span-2 flex justify-center mt-2">
          <button
            type="submit"
            className="bg-[#5EBA3F] hover:bg-[#4da832] text-white font-bold text-lg md:text-xl py-3 px-14 md:px-20 rounded-[14px] shadow-lg"
          >
            Register Now
          </button>
        </div>

      </form>
    </div>
  );
}