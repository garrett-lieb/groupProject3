import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Root from "./components/Root"
import LoginPage from "./components/LoginPage"
import Pickup from "./components/Pickup"
import Price from "./components/Price"
import Footer from "./components/Footer"

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<LoginPage />} />
      <Route path="/Pickup" element={<Pickup />} />
      <Route path="/Price" element={<Price />} />
    
    </Route>
  )
)
  return (
    <>
    <RouterProvider router={router} />
    <Footer />
    </>
  )
}

export default App

