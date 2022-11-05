import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/style.css";

const root = ReactDOM.createRoot(
    document.querySelector('.root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
