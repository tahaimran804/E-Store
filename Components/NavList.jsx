import Link from "next/link";
import Container from "@/Components/Container";

const NavList = () => {
  return (
    <nav className="bg-gray-100 shadow-sm">
      <Container className="flex gap-6 py-3 justify-center font-medium">
        <Link href="/" className="hover:text-indigo-600 transition">
          Home
        </Link>
        <Link href="/store" className="hover:text-indigo-600 transition">
          Store
        </Link>
        <Link href="/about" className="hover:text-indigo-600 transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-indigo-600 transition">
          Contact
        </Link>
      </Container>
    </nav>
  );
};

export default NavList;
