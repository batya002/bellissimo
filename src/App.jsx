import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Halal from "./pages/Halal";
import Login from "./pages/Login";
import Admin from "./admin/Admin";
import Combo from "./util/Combo";
import Pizza from "./util/Pizza";
import Snacks from "./util/Snacks";
import Drinks from "./util/Drinks";
import Salats from "./util/Salats";
import Desserts from "./util/Desserts";
import Souces from "./util/Souces";
import PageIsNoteFound from "./errors/PageIsNoteFound";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Basket from "./pages/Basket";

export default function App() {
  const location = useLocation();

  const validPaths = [
    "/",
    "/halal",
    "/login",
    "/bascet",
    "/admin",
    "/admin/combo",
    "/admin/pizza",
    "/admin/snack",
    "/admin/drink",
    "/admin/salat",
    "/admin/dessert",
    "/admin/souce",
  ];

  const isInvalidPath = !validPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  const noFooterPaths = ["/login", "/admin", `/detail/`, "/bascet"];
  const shouldHideFooter =
    isInvalidPath ||
    noFooterPaths.some((path) => location.pathname.startsWith(path));

  return (
    <React.Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/halal" element={<Halal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/bascet" element={<Basket />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/combo" element={<Combo />} />
          <Route path="/admin/pizza" element={<Pizza />} />
          <Route path="/admin/snack" element={<Snacks />} />
          <Route path="/admin/drink" element={<Drinks />} />
          <Route path="/admin/salat" element={<Salats />} />
          <Route path="/admin/dessert" element={<Desserts />} />
          <Route path="/admin/souce" element={<Souces />} />
          <Route path="*" element={<PageIsNoteFound />} />
        </Routes>
      </main>
      {!shouldHideFooter && <Footer />}
    </React.Fragment>
  );
}
