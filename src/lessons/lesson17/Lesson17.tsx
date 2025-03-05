import React from "react";
import Store from "../../components/store/Store";
import StorePage from "../../components/store/StorePage";
import { Route, Routes } from "react-router-dom";

export default function Lesson17(): JSX.Element {
  return (
    <div>
      <h2>Lesson17</h2>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path=":id" element={<StorePage />} />
      </Routes>
    </div>
  );
}
