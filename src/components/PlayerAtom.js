import { atom } from "recoil";

export const searchedPlayer = atom({
  key: "playerName",
  default: "",
});
