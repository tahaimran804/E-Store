"use client";
import Container from "@/Components/Container";
import React from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm()
  const onSubmit = (data) => {
    console.log(data);
    reset()
  }
  return (
    <section className="bg-gray-50 py-16 px-4">
      <Container>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Side – Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have questions about our products or need help with an order?
              We’d love to hear from you. Our support team is here 24/7 to help you.
            </p>

            <div className="space-y-5">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-indigo-600 text-xl" />
                <span className="text-gray-700">+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-indigo-600 text-xl" />
                <span className="text-gray-700">support@yourstore.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                <span className="text-gray-700">123 Fashion Street, Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Right Side – Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>

            {isSubmitSuccessful && (
              <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-sm">
                ✅ Message sent successfully!
              </div>
            )}


            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full border ${errors.name ? "border-red-500 outline-none" : "border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    } rounded-lg px-4 py-2 `}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  {...register('email', { required: "Email is must required for contact you" })}
                  className={`w-full border ${errors.email ? "border-red-500 outline-0" : "border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"} border-gray-300 rounded-lg px-4 py-2`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  {...register('sms', { required: "The message is required" })}
                  className={`w-full border ${errors.email ? "border-red-500 outline-0" : "border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"} border-gray-300 rounded-lg px-4 py-2`}
                ></textarea>
                {errors.sms && (
                  <p className="text-red-500 text-sm mt-1">{errors.sms.message}</p>
                )}

              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>


          </div>

        </div>
      </Container>
    </section>
  );
};

export default Contact;
