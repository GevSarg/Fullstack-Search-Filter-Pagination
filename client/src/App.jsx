import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Error, User, Users } from "./pages";
import ROUTES from "./routes";
import Layouts from "./pages/Layouts";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.Users} element={<Layouts />}>
        <Route index element={<Users />} />
        <Route path={ROUTES.User} element={<User />} />
        <Route path={ROUTES.ERROR} element={<Error />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
