import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

export default function AboutPreview() {
  return (
    <section className="bg-white py-16 px-4">
      <Container>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              We Believe in Quality & Trust
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Since our beginning, <strong>YourStore</strong> has focused on providing
              the best shopping experience with authentic, high-quality products
              that our customers can rely on.
            </p>
            <Link
              href="/about"
              className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-full font-medium hover:bg-indigo-700 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>

          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/Images/slider1.webp" // 👈 change to your image
              alt="About Preview"
              width={600}
              height={400}
              className="object-cover hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
