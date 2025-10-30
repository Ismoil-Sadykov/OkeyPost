import Header from "./components/header/Header"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer';
import HowToBuy from "./components/Pages/HowToBuy/HowToBuy";
import Sales from './components/Pages/Sales/Sales';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Main /> },
        { path: "/HowToBuy", element: <HowToBuy /> },
        { path: "/Sales", element: <Sales /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
