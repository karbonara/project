import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { AppLink } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <AppLink to='/'>Main</AppLink>
      <AppLink to='/about'>About</AppLink>
    </div>
  )
}
