import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', { hovered: true }, [theme, 'test'])}>
      <Navbar />
      <button onClick={toggleTheme}>Change theme</button>
      <AppRouter />
    </div>
  )
}

export default App;