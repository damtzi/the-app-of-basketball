import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Header />
      <Profile />
    </RecoilRoot>
  );
}

export default App;
