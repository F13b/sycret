import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Error from "./Error";
import Payment from "./Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "contact-form",
    element: <Contact />,
    errorElement: <Error />,
  },
  {
    path: "payment",
    element: <Payment />,
    errorElement: <Error />,
  },
]);

export default router;
