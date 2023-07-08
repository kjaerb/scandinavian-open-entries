import { FirebaseUserDoc } from "@/types/User";
import { UserInfoSchema } from "@/validators/userInfoSchema";
import { create } from "zustand";

interface UserInfoProps {
  user: UserInfoSchema | null | undefined;
  setUser: (user: UserInfoSchema | null | undefined) => void;
}

const userInfoStore = create<UserInfoProps>((set) => ({
  user: null,
  setUser: (user: UserInfoSchema | null | undefined) => set({ user }),
}));

export default userInfoStore;
