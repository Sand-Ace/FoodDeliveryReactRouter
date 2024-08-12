import RootLayout from "./Layout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "menu", element: <MenuPage /> },
    ],
  },
]);

export default function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
