import create, { StateCreator } from "zustand";

export interface CounterSlice {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementBy: (amount: number) => void;
}

const createCounterSlice: StateCreator<CounterSlice> = (set) => ({
  count: 0, // initial state
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set((state) => ({ count: 0 })),
  incrementBy: (amount: number) =>
    set((state) => ({ count: state.count + amount })),
});

export default createCounterSlice;
