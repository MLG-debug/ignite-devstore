'use client'

import { createContext, useContext, useState } from 'react'

interface CartItem {
  id: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: number) => void
  removeFromCart: (item: number) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (productId: number) => {
    const item = items.find((item) => item.id === productId)

    if (item) {
      setItems((state) =>
        state.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      )
    } else {
      setItems([...items, { id: productId, quantity: 1 }])
    }
  }

  const removeFromCart = (item: number) => {
    setItems((state) =>
      state.reduce<CartItem[]>((acc, currentItem) => {
        if (currentItem.id === item) {
          if (currentItem.quantity > 1) {
            return [
              ...acc,
              { ...currentItem, quantity: currentItem.quantity - 1 },
            ]
          }
          return acc
        }
        return [...acc, currentItem]
      }, []),
    )
  }

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
