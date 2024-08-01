// import create from 'zustand';

// interface FormState {
//   name: string;
//   age: number;
//   setName: (name: string) => void;
//   setAge: (age: number) => void;
// }

// export const useFormStore = create<FormState>((set) => ({
//   name: '',
//   age: 0,
//   setName: (name: string) => set({ name }),
//   setAge: (age: number) => set({ age }),
// }));

import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

interface FormEntry {
  id: number;
  name: string;
  age: number;
}

interface FormState {
  entries: FormEntry[];
  addEntry: (entry: Omit<FormEntry, 'id'>) => void;
}

type MyPersist = (config: StateCreator<FormState>, options: PersistOptions<FormState>) => StateCreator<FormState>;

export const useFormStore = create<FormState>(
  (persist as MyPersist)(
    (set) => ({
      entries: [],
      addEntry: (entry) =>
        set((state) => ({
          entries: [...state.entries, { ...entry, id: state.entries.length + 1 }],
        })),
    }),
    {
      name: 'form-store', // unique name in storage
    }
  )
);