"use client"

import style from "@/app/Style/Header.module.css";
import Container from "@/Components/Container";
import MenuList from "@/Components/NavList";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import SearchBox from "./SearchBox";
import { useContext } from "react";
import { FilterContext } from "@/Context/FilterProducts";
import Link from "next/link";



const Header = () => {
  const { setopenSearchBox } = useContext(FilterContext)
  return (
    <>
      <header className="py-3 px-4 shadow bg-white sticky top-0 z-50">
        <Container className="flex items-center justify-between">
          <Link href='/'>
            <div className="text-2xl font-bold text-indigo-600">EStore</div>
          </Link>

          <SearchBox />

          <div className="flex items-center gap-2">
            <FaSearch onClick={() => setopenSearchBox(true)} className={`${style.SearchIcon} cursor-pointer w-7 h-7 text-gray-700`} />
            <div className="relative cursor-pointer">
              <FaShoppingCart className="w-7 h-7 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </div>
          </div>
        </Container>
      </header>
      <MenuList />
    </>
  );
};

export default Header;
