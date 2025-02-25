import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Services from "./pages/Service/ServicesPage";
import Project from "./pages/Project/ProjectPage";
import ProjectApp from "./pages/Project/ProjectApp";

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";
import PageNotFount from "./components/PageNotFount/PageNotFount";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <RouterScrollTop />
      {loading ? (
        <div className="loading-pag">
          <div className="loader">
            <span>(Md Danish)</span>
            <span>(Md Danish)</span>
          </div>
        </div>
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/service" element={<Services />}></Route>
          <Route exact path="/project" element={<Project />}></Route>
          <Route exact path="/project/app" element={<ProjectApp />} />
          <Route exact path="*" element={<PageNotFount />} />
        </Routes>
      )}
    </>
  );
}

export default App;
