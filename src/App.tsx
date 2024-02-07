import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/navbar/navbat";
import Home from "./components/home/home";
import Pagomovil from "./components/pagomovil/pagomovil";
import UsersManagement from "./components/usersManagement/UsersManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pagomovil",
    element: <Pagomovil />,
  },
  {
    path: "/usuarios",
    element: <UsersManagement />,
  },
]);

function App() {
  return (
    <div>
      <NavBar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App;