import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routConfig } from "shared/config/routeConfig/routeConfig";
import PageLoader from "widgets/PageLoader/PageLoader";

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {
          Object.values(routConfig).map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={(
                <div className="page-wrapper">
                  {route.element}
                </div>
              )}
            />
          ))
        }
      </Routes>
    </Suspense>
  )
};

export default AppRouter;