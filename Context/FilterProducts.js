'use client';

import { AllProducts } from '@/Components/ProductData/Data';
const { createContext, useState } = require('react');
export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [myCategory, setCategory] = useState(null);
  const categories = [...new Set(AllProducts.map((item) => item.category))];
  const [openSearchBox, setopenSearchBox] = useState(false);

  const filterCategory = myCategory
    ? AllProducts.filter((item) => item.category === myCategory)
    : AllProducts;

  return (
    <FilterContext.Provider
      value={{
        setCategory,
        categories,
        filterCategory,
        setopenSearchBox,
        openSearchBox,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
