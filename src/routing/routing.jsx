import { Routes, Route } from "react-router-dom";
import { Detail } from "../pages/detail/detail";
import { Home } from "../pages/home/home";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
};
