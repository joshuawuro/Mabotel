import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/Homepage/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Team from "./Pages/Team";
import Nominate from "./Pages/Nominate/Nominate";
import Navbar from "./Pages/common/Navbar";
import NotFound from "./Pages/NotFound";
import Footer from "./Pages/common/Footer";
import Random from "./Pages/Random";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "nominate",
        element: <Nominate />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
