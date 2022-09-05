import { createContext, ReactNode, useState } from 'react';
import { GlobalContent, Product } from '../types/interfaces';

export const Context = createContext<GlobalContent>({
  searchTerm: '',
  products: undefined,
  addSearchTerm: () => { },
  addProducts: () => { },
});

export const Provider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>();
  const [products, setProducts] = useState<Array<Product>>();
  const addSearchTerm = (item: string) => {
    setSearchTerm(item);
  };

  const addProducts = (items: Array<Product>) => {
    setProducts(items);
  };

  const context = {
    searchTerm,
    products,
    addSearchTerm,
    addProducts,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const { Consumer } = Context;
