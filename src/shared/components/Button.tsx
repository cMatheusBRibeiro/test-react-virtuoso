import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  color: string;
};

const classes = `py-4 rounded-2xl min-w-sm text-center border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white ease-in-out duration-300`;

const Button = ({ children, href }: ButtonProps) => {
  if (href) {
    return (
      <Link className={`${classes}`} href={href}>
        {children}
      </Link>
    );
  }
  return <button className={classes}>{children}</button>;
};

export default Button;
