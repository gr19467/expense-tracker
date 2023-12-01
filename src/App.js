import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Budget from "./pages/Budget";

import "./App.css";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="Budget" element={<Budget />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}