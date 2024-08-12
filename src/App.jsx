import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import Layout from "./components/Layout";
import "./App2.css";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Info from "./components/Info";
import Contact from "./components/Contact";

export const TheContext = createContext();

const App = () => {

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/info" element={<Info />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
    );
}

export default App;
