import { create } from "zustand";

interface UserInfoStepsStoreProps {
  currentStep: number;
  incrementStep: () => void;
  decrementStep: () => void;
  resetStep: () => void;
}

const userInfoStepsStore = create<UserInfoStepsStoreProps>((set) => ({
  currentStep: 0,
  incrementStep: () =>
    set((state) => {
      if (state.currentStep < 3) {
        return { currentStep: state.currentStep + 1 };
      }
      return state;
    }),
  decrementStep: () =>
    set((state) => {
      if (state.currentStep > 0) {
        return { currentStep: state.currentStep - 1 };
      }
      return state;
    }),
  resetStep: () => set({ currentStep: 0 }),
}));

export default userInfoStepsStore;
