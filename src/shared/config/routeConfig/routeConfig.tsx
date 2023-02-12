import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NoFaundPage } from "pages/NoFaundPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NoFaundPage = 'NoFaundPage',
}

export const RouthPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NoFaundPage]: '*',
};

export const routConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouthPath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RouthPath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NoFaundPage]: {
    path: '*',
    element: <NoFaundPage />
  }
};