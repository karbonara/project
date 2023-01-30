import { render } from "react-dom";
import Count from "./components/count";
import classes from "./style.module.scss";
render(
  <div>
    <Count />
    <div className={classes.test}>TEST</div>
  </div>,
  document.getElementById('root')
)
