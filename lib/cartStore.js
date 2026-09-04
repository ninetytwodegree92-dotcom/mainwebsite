import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { STORE_WHATSAPP_NUMBER } from '@/data/products';

export const useCartStore = create()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      // Drawer Open/Close State Actions
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      // Add Item Action (handles duplicate item + size combinations)
      addItem: (product, selectedSize = 'M', quantity = 1) => {
        set((state) => {
          const itemKey = `${product.id}-${selectedSize}`;
          const existingIndex = state.items.findIndex((item) => item.cartItemId === itemKey);

          if (existingIndex > -1) {
            const updatedItems = [...state.items];
            updatedItems[existingIndex].quantity += quantity;
            return { items: updatedItems, isOpen: true };
          }

          return {
            items: [
              ...state.items,
              {
                cartItemId: itemKey,
                product,
                selectedSize,
                quantity,
              },
            ],
            isOpen: true,
          };
        });
      },

      // Remove Item
      removeItem: (cartItemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.cartItemId !== cartItemId),
        }));
      },

      // Update Quantity (+ / -)
      updateQuantity: (cartItemId, newQty) => {
        if (newQty <= 0) {
          get().removeItem(cartItemId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) => {
            if (item.cartItemId === cartItemId) {
              return { ...item, quantity: newQty };
            }
            return item;
          }),
        }));
      },

      // Clear Entire Cart
      clearCart: () => set({ items: [] }),

      // Total Item Count Getter
      getTotalCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      // Total Price Getter
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = item.product.price || 0;
          return total + price * item.quantity;
        }, 0);
      },

      // Formats Entire Cart Into Single Pre-filled WhatsApp Message
      getWhatsAppCheckoutLink: () => {
        const { items, getTotalPrice } = get();
        if (items.length === 0) return '#';

        let message = `Hello 92degree! I would like to place an order for the following items in my bag:\n\n`;

        items.forEach((item, index) => {
          const price = item.product.price
            ? `${item.product.currency || 'PKR'} ${item.product.price.toLocaleString()}`
            : 'Launching Soon';

          message += `${index + 1}. ${item.product.name}\n`;
          message += `   • Size: ${item.selectedSize}\n`;
          message += `   • Quantity: ${item.quantity}\n`;
          message += `   • Unit Price: ${price}\n\n`;
        });

        message += `----------------------------\n`;
        message += `TOTAL ORDER VALUE: PKR ${getTotalPrice().toLocaleString()}\n\n`;
        message += `Please confirm stock and send payment instructions.`;

        return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      },
    }),
    {
      name: '92degree-cart-storage',
      storage: createJSONStorage(() => localStorage),
      // Only persist the items array, not the drawer visibility state
      partialize: (state) => ({ items: state.items }),
    }
  )
);