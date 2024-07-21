import { Outlet, Link } from "react-router-dom";
import Logo from "./Logo";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";

const Layout = () => {
    const navBar = useRef();

    useEffect(() => {
        console.log("render");
    });

    const activePage = (e) => {
        const navButtons = Object.values(navBar.current.children);
        navButtons.forEach(e => e.style.border = "none");
        e.target.style.border = "5px solid #0af";
    };

    return (
        <div className="layout" >
            <div className="upper">
                <Logo />
                <nav ref={navBar}>
                    <Link onClick={activePage} to="/">Home</Link>
                    <Link onClick={activePage} to="/projects">Projects</Link>
                    <Link onClick={activePage} to="/info">Info</Link>
                    <Link onClick={activePage} to="/contact">Contact</Link>
                </nav>
                <Header />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
