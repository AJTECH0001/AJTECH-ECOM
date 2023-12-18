
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Announcement from "./Components/Announcements";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";





const Layout = () => {
  return (
    <div className="app">
      <Announcement/>
      <Navbar/>
      <Outlet/> 
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      
      {
        path:"/Product",
        element:<Product />
      },

      {
        path:"/Cart",
        element:<Cart />
      },

      {
        path:"/Register",
        element:<Register />
      },

      {
        path:"/Login",
        element:<Login />
      },


      
    ]
  },
]);

const App = () => {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
};

export default App;
