import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {
          Object.values(routConfig).map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))
        }
      </Routes>
    </Suspense>
  )
};

export default AppRouter;