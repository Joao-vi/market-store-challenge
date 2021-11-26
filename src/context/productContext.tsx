import { createContext, useState, ReactNode, useCallback } from "react";
import { api } from "../services/api";

interface IAPIData {
  quantity: 1;
  category: string;
  description: string;
  id: string;
  image: string;
  price: string;
  rating: Record<"count" | "rate", number>;
  title: string;
}

interface IProductContext {
  products: IAPIData[];
  fetchAllProducts: () => void;
}

interface ProductContextProviderProps {
  children: ReactNode;
}
export const productContext = createContext({} as IProductContext);

export function ProductContextProvider({ children }: ProductContextProviderProps) {
  const [products, setProducts] = useState<IAPIData[]>([]);

  const fetchAllProducts = useCallback(() => {
    fetch(`${api.base_url}/${api.products}`)
      .then((response) => response.json().then((data) => setProducts(data)))
      .catch((e) => console.log(e));
  }, []);

  return (
    <productContext.Provider value={{ products, fetchAllProducts }}>
      {children}
    </productContext.Provider>
  );
}
