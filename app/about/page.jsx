"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/Components/Container";

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Quality First",
      content:
        "We ensure every product meets our strict quality standards before it reaches you. Our customers deserve nothing less than perfection.",
    },
    {
      title: "Fast & Secure Delivery",
      content:
        "With trusted logistics partners, we guarantee quick and safe deliveries right to your doorstep.",
    },
    {
      title: "Customer Satisfaction",
      content:
        "Our customers are our priority — from pre-purchase queries to after-sales support, we’re always here to help.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      <Container>
        {/* Hero Section */}
        <section className="relative text-gay-900 py-16 text-center px-4">
          <h1
            className="text-5xl font-bold mb-4"
          >
            About Our Store
          </h1>
          <p

            className="text-lg max-w-2xl mx-auto"
          >
            Discover who we are, what we do, and why thousands trust our e-commerce brand.
          </p>
        </section>

        {/* About Section */}
        <section className="container mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-center">
          <div
          >
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our store was founded with one mission — to make high-quality products accessible for everyone.
              We focus on authenticity, premium designs, and customer trust.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Over the years, we’ve built a strong connection with our customers through transparency and consistent service.
            </p>
          </div>

          <div className="relative"
          >
            <Image
              src="/Images/about2.jpg"
              alt="About Us"
              width={800}
              height={500}
              className="shadow-lg object-cover"
            />
          </div>
        </section>

        {/* Accordion Section */}
        <section className="bg-white w-full py-16 px-4">
          <div className="container mx-auto w-full max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>

            <div className="space-y-6 w-full">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="border w-full border-gray-200 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center text-left py-3 px-8 text-lg font-medium hover:bg-indigo-100 transition-all"
                  >
                    <span>{item.title}</span>
                    <span className="text-2xl">{activeIndex === index ? "−" : "+"}</span>
                  </button>

                  {activeIndex === index && (
                    <div className="px-8 pt-2 pb-5 text-gray-700 w-full transition-all duration-300 ease-in-out">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Stats Section */}
        <section className="bg-gray-100  w-full py-10 px-2 shadow-sm">
          <div className="container mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
            {[
              { num: "10K+", label: "Happy Customers" },
              { num: "500+", label: "Premium Products" },
              { num: "5+", label: "Years Experience" },
              { num: "99%", label: "Positive Feedback" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-3xl font-bold text-indigo-600">{stat.num}</h3>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AboutPage;
