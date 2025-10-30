import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import HowToBuy from "./components/Pages/HowToBuy/HowToBuy";
import Sales from './components/Pages/Sales/Sales';
import Layout from "./layout/Layout";



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
