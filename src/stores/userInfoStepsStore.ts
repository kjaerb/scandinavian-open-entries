import { create } from "zustand";

interface UserInfoStepsStoreProps {
  currentStep: number;
  incrementStep: () => void;
  decrementStep: () => void;
  isUploadingData: boolean;
  setIsUploadingData: (isUploadingData: boolean) => void;
}

const userInfoStepsStore = create<UserInfoStepsStoreProps>((set) => ({
  currentStep: 1,
  incrementStep: () =>
    set((state) => {
      if (state.currentStep < 4) {
        return { currentStep: state.currentStep + 1 };
      }
      return state;
    }),
  decrementStep: () =>
    set((state) => {
      if (state.currentStep > 1) {
        return { currentStep: state.currentStep - 1 };
      }
      return state;
    }),

  isUploadingData: false,
  setIsUploadingData: (isUploadingData: boolean) => set({ isUploadingData }),
}));

export default userInfoStepsStore;
