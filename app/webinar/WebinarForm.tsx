"use client";

export default function WebinarForm() {
  return (
    <div className="w-full bg-[#1c1c1c] text-white rounded-[20px] md:rounded-[24px] px-6 md:px-10 py-8 shadow-2xl">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6 tracking-tight">
        Register for the Webinar
      </h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
      >
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400 font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            required
            className="bg-[#2a2a2a] text-white placeholder-gray-500 rounded-[12px] px-4 py-3 text-base outline-none border border-transparent focus:border-[#5EBA3F] transition-all"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400 font-medium">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            required
            className="bg-[#2a2a2a] text-white placeholder-gray-500 rounded-[12px] px-4 py-3 text-base outline-none border border-transparent focus:border-[#5EBA3F] transition-all"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400 font-medium">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="bg-[#2a2a2a] text-white placeholder-gray-500 rounded-[12px] px-4 py-3 text-base outline-none border border-transparent focus:border-[#5EBA3F] transition-all"
          />
        </div>

        {/* Profession */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400 font-medium">Profession</label>
          <input
            type="text"
            placeholder="e.g. Student, Business Owner..."
            required
            className="bg-[#2a2a2a] text-white placeholder-gray-500 rounded-[12px] px-4 py-3 text-base outline-none border border-transparent focus:border-[#5EBA3F] transition-all"
          />
        </div>

        {/* Submit */}
        <div className="sm:col-span-2 flex justify-center mt-2">
          <button
            type="submit"
            className="bg-[#5EBA3F] hover:bg-[#4da832] text-white font-bold text-lg md:text-xl py-3 px-14 md:px-20 rounded-[14px] shadow-lg transition-all"
          >
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
}
