import React from "react"
import Footer from "./Footer";
import Navbar from "./navbar/index";

function Layout({ children }) {
    return (
      <div className="layout">
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </div>
    );
  }
export default Layout;


