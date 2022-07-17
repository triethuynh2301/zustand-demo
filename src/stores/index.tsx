import create, { StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import createCounterSlice, {
  CounterSlice,
} from "../features/counter/CounterSlice";

interface PeopleSlice {
  people: string[];
  addPeople: (person: string) => void;
}

const createPeopleSlice: StateCreator<PeopleSlice> = (set) => ({
  people: ["John Doe"],
  addPeople: (person: string) =>
    set((state) => ({ people: [...state.people, person] })),
});

const useStore = create<CounterSlice & PeopleSlice>()(
  (...a) => ({
  ...createCounterSlice(...a),
  ...createPeopleSlice(...a),
}));

export default useStore;
