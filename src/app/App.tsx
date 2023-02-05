import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";
import './styles/index.scss';
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', { hovered: true }, [theme, 'test'])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <AppRouter />
    </div>
  )
}

export default App;