"use client";
import React from "react";
import { AllProducts } from "@/Components/ProductData/Data";
import Container from "@/Components/Container";
import Image from "next/image";
import Link from "next/link";
import MyRelativeProducts from "@/Components/RelativeProducts";

const Page = ({ params }) => {
  const { slug } = params;
  const Product = AllProducts.find((item) => item.slug === slug);
  const RelativeProducts = AllProducts.filter((item) => item.category === Product.category && item.slug !== Product.slug);
  if (!Product) {
    return (
      <Container>
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-2xl font-bold text-red-600">
            Something went wrong — Product not found ❌
          </h2>
        </div>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
          {/* Left Side - Image */}
          <div className="relative w-full h-full">
            <Image
              src={Product.image}
              alt={Product.alt || Product.title}
              width={600}
              height={400}
              className="object-cover rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* Right Side - Details */}
          <div className="flex flex-col gap-4 justify-center">
            <h1 className="text-3xl font-bold">{Product.title}</h1>
            <p className="text-gray-600">{Product.longDesc}</p>
            <p className="text-xl font-semibold text-green-600">
              Rs: {Product.price}
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </Container>

      <MyRelativeProducts RelativeProducts={RelativeProducts} />

    </>
  );
};

export default Page;
