import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', { hovered: true }, [theme, 'test'])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to='/about'>About</Link>
      <Link to='/main'>Main</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;