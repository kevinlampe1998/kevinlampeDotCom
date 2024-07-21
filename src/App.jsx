import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App2.css";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Info from "./components/Info";
import Contact from "./components/Contact";


const App = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="info" element={<Info />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
