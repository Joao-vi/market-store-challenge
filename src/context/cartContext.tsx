import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

export interface IAPIData {
  quantity: number;
  category: string;
  description: string;
  id: string;
  image: string;
  price: string;
  rating: Record<"count" | "rate", number>;
  title: string;
}

interface ICartContext {
  cart: IAPIData[];
  setCart: Dispatch<SetStateAction<IAPIData[]>>;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const cartContext = createContext({} as ICartContext);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<IAPIData[]>([]);

  return <cartContext.Provider value={{ cart, setCart }}>{children}</cartContext.Provider>;
}
