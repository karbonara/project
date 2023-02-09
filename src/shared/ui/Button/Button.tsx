import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Button.module.scss";
import { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [className, 'clear'])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
