import { create } from "zustand";

const jobStore = create((set) => ({
  jobs: [],
  setJobs: (jobs) => set({ jobs }),
}));

export default jobStore;
