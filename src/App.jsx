import RootLayout from "./Layout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import HomePage from "./Pages/HomePage/HomePage";
import MenuPage from "./Pages/MenuPage/MenuPage";
import CartPage from "./Pages/CartPage/CartPage";
import PlaceOrder from "./Pages/PLaceOrderPage/PlaceOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "menu", element: <MenuPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "order", element: <PlaceOrder /> },
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
