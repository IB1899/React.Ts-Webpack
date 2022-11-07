import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FC } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import ContextProvider from "./contexts/Context"

let App:FC = () => {


    //! To run development server run 'npm run start'
    //! To run production build run 'npm run build', and run 'npx serve -s build'

    return (
        <Router>
            <>
                <nav>
                    <Link to={"/"} >Home</Link>
                    <Link to={"/About"} >About</Link>
                </nav>

                <ContextProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />

                        <Route path="*" element={<h2>Page Not Found</h2>} />
                    </Routes>
                </ContextProvider>
            </>
        </Router>
    )
}

export default App;