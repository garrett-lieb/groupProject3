import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Root from "./components/Root"
import userPortal from "./components/userPortal"
import Two from "./components/Two"
import Three from "./components/Three"
import Four from "./components/Four"
import Footer from "./components/Footer"

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<userPortal />} />
      <Route path="/Two" element={<Two />} />
      <Route path="/Three" element={<Three />} />
      <Route path="/Four" element={<Four />} />
    
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
