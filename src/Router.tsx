import React from "react";
import { Route, Routes } from "react-router-dom";
import Event from "./pages/Event";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>HOME!!!!!!!!!!!!</h1>} />
      <Route path="/event" element={<h1>Event</h1>} />
    </Routes>
  );
}
