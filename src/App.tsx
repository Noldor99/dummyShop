import React from "react";

import { Routes, Route } from "react-router-dom";
import Mainlayout from "./components/Mainlayout";

import NotFoundBlock from "./components/NotFoundBlock";
import About from "./page/About";
import Basket from "./page/Basket";
import Home from "./page/Home";
import SigneProduct from "./page/SigneProduct";

const App = () => {

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="dummyShop" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="basket" element={<Basket />} />
          <Route path="about" element={<About />} />
          <Route path="signeproduct/:id" element={<SigneProduct />} />
        </Route>
        <Route path="*" element={<NotFoundBlock />} />
      </Routes>
    </React.Suspense>
  )
}

export default App