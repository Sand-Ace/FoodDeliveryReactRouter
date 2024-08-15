import RootLayout from "./Layout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//contextProvider
import { StoreContextProvider } from "./Context/StoreContext";

//Pages
import HomePage from "./Pages/HomePage/HomePage";
import CartPage from "./Pages/CartPage/CartPage";
import PlaceOrder from "./Pages/PLaceOrderPage/PlaceOrder";
import MenuPage from "./Pages/MenuPage/MenuPAge";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "menu", element: <MenuPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "order", element: <PlaceOrder /> },
    ],
  },
]);

export default function App() {
  return (
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>
  );
}
