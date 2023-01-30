import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense, useContext } from "react";
import './styles/index.scss';
import { useTheme } from "./theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Change theme</button>
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