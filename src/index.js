import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.scss"
import { App } from "./components/App";
const id = document.getElementById('root');
const root = createRoot(id);
const h1 = <h1>Hello, I am H1</h1>
console.log(h1);

root.render(<App />)
