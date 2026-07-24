import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Import BrowserRouter
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)



// Wrap the App component with the BrowserRouter component to enable the router features.
// ReactDOM.render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
//   document.getElementById("root")
// );