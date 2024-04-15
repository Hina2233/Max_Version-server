import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import UserHome from "./ui/userHome";
import Customize from "./ui/Customize";

function App() {
  const [ingredients, setIngredients] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/UserHome", element: <UserHome /> },
        {
          path: "/Customize",
          element: (
            <Customize
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
          ),
        },
        {
          path: "/MakeYourOwnPizza", // New route for Make Your Own Pizza
          element: (
            <Customize
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
          ),
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        { path: "/cart", element: <Cart /> },
        {
          path: "/order/new",
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
          loader: orderLoader,
          errorElement: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;