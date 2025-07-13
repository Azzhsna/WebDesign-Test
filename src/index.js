import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./component/Home";
import Services from "./component/Services";
import About from "./component/About";
import Portofolio from "./component/Portofolio";
import Blog from "./component/Blog";
import Shop from "./component/Shop";
import Testimoni from "./component/Testimoni";
import Contact from "./component/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Home />
    <Services />
    <About />
    <Shop />
    <Portofolio />
    <Blog />
    <Testimoni />
    <Contact />
  </React.StrictMode>
);
