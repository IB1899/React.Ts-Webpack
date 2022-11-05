import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

let App = () => {


    //! To run development server run 'npm run start'
    //! To run production build run 'npm run build', and run 'npx serve -s build'

    return (
        <Router>
            <>
                <nav>
                    <Link to={"/"} >Home</Link>
                    <Link to={"/About"} >About</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />

                    <Route path="*" element={<h2>Page Not Found</h2>} />
                </Routes>
            </>
        </Router>
    )
}

export default App;