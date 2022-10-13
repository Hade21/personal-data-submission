import { Routes, Route } from "react-router-dom";
import { Detail } from "../pages/detail/detail";
import { Home } from "../pages/home/home";
import Multistep from "../pages/multistep/multistep";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Multistep />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
};
