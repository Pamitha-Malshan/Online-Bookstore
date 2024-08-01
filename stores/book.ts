// import create, { StateCreator } from 'zustand';
// import { persist, PersistOptions } from 'zustand/middleware';

// interface Book {
//   id: number;
//   bookname: string;
//   author: string;
//   price: number;
//   bookimage: string;  // URL of the image
//   category: string;
// }

// interface BookState {
//   books: Book[];
//   addBook: (book: Omit<Book, 'id'>) => void;
// }

// type MyPersist = (config: StateCreator<BookState>, options: PersistOptions<BookState>) => StateCreator<BookState>;

// export const useBookStore = create<BookState>(
//   (persist as MyPersist)(
//     (set) => ({
//       books: [],
//       addBook: (book) =>
//         set((state) => ({
//           books: [...state.books, { ...book, id: state.books.length + 1 }],
//         })),
//     }),
//     {
//       name: 'book-store', // unique name in storage
//     }
//   )
// );

import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

interface Book {
  id: number;
  bookname: string;
  author: string;
  price: number;
  category: string;
}

interface CartItem extends Book {
  quantity: number;
}

interface BookState {
  books: Book[];
  cart: CartItem[];
  addBook: (book: Omit<Book, 'id'>) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateCartItemQuantity: (id: number, quantity: number) => void;
}

type MyPersist = <
  T extends BookState,
  U extends object = {},
  V extends (state: T) => T = (state: T) => T
>(
  config: StateCreator<T, [], [], U>,
  options: PersistOptions<T, U>
) => StateCreator<T, [], [], U>;

export const useBookStore = create<BookState>(
  (persist as MyPersist)(
    (set) => ({
      books: [],
      cart: [],
      addBook: (book) =>
        set((state) => ({
          books: [...state.books, { ...book, id: state.books.length + 1 }],
        })),
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
          if (existingItem) {
            return {
              cart: state.cart.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
              ),
            };
          }
          return { cart: [...state.cart, item] };
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
        updateCartItemQuantity: (id, quantity) =>
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === id ? { ...item, quantity } : item
            ),
          })),
    }),
    {
      name: 'store', 
    }
  )
);