'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Plant } from '@/types';

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (plant: Plant) => void;
  removeItem: (plantId: string) => void;
  updateQuantity: (plantId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (plant: Plant) => {
        const items = get().items;
        const existingItem = items.find(item => item.plant.id === plant.id);
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.plant.id === plant.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          });
        } else {
          set({ items: [...items, { plant, quantity: 1 }] });
        }
      },
      removeItem: (plantId: string) => {
        set({ items: get().items.filter(item => item.plant.id !== plantId) });
      },
      updateQuantity: (plantId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(plantId);
          return;
        }
        
        set({
          items: get().items.map(item =>
            item.plant.id === plantId ? { ...item, quantity } : item
          )
        });
      },
      clearCart: () => set({ items: [] }),
      toggleCart: () => set({ isOpen: !get().isOpen }),
      getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
      getTotalPrice: () => get().items.reduce((total, item) => total + (item.plant.price * item.quantity), 0)
    }),
    {
      name: 'kflora-cart'
    }
  )
);