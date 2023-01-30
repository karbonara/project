import { Route, Routes } from "react-router-dom";
import Count from "./components/count";
import classes from "./style.module.scss";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";

const App = () => {
  return (
    <div>
      <Count />
      <h2 className={classes.text}>React</h2>
      <Link to='/about'>About</Link>
      <Link to='/main'>Main</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/main" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;