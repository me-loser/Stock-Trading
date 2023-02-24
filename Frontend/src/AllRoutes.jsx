import { Route, Routes } from "react-router-dom";
import DashboardPage from "./components/dashboard/DashboardPage";

const routes = [
  {
    path: "/",
    Component: DashboardPage,
  },
];
export const AllRoutes = ({ isLoading, user }) => (
  <Routes>
    {routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          element={<route.Component />}
        ></Route>
      );
    })}
  </Routes>
);
