import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Root from "./components/Root";
import LoginPage from "./components/LoginPage/login";
import UserPortal from "./components/UserPortal/userPortal";
import Pickup from "./components/Pickup/pickup";
import Price from "./components/Price/price";
import Footer from "./components/Footer/footer";

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<LoginPage />} />
      <Route path="/UserPortal" element={<UserPortal />} />
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

export default App;

