import { create } from "zustand";
import { UserInfoSchema } from "@/validators/userInfoSchema";

interface UserStore {
  name: UserInfoSchema["name"];
  setName: (name: UserInfoSchema["name"]) => void;
  email: UserInfoSchema["email"];
  setEmail: (email: UserInfoSchema["email"]) => void;
  phone: UserInfoSchema["phone"];
  setPhone: (phone: UserInfoSchema["phone"]) => void;
  country: UserInfoSchema["country"];
  setCountry: (country: UserInfoSchema["country"]) => void;
  club: UserInfoSchema["club"];
  setClub: (club: UserInfoSchema["club"]) => void;
  federation: UserInfoSchema["federation"];
  setFederation: (federation: UserInfoSchema["federation"]) => void;
}

const userStore = create<UserStore>((set) => ({
  name: "",
  setName: (name) => set({ name }),
  email: "",
  setEmail: (email) => set({ email }),
  phone: "",
  setPhone: (phone) => set({ phone }),
  country: "",
  setCountry: (country) => set({ country }),
  club: "",
  setClub: (club) => set({ club }),
  federation: "",
  setFederation: (federation) => set({ federation }),
}));

export default userStore;
