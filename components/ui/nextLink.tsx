import React, { FC, forwardRef } from "react";
import clsx from "clsx";
import Link from "next/link";

const classes: any = {
  base: "inline-flex items-center justify-center whitespace-nowrap gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  disabled: "opacity-50 cursor-not-allowed",
  size: {
    small: "px-2 py-1 text-sm",
    normal: "px-4 py-2",
    large: "px-8 py-3 text-lg",
  },
  variant: {
    primary:
      "bg-light-mustard-100 dark:bg-dark-mustard-100 text-light-primary dark:text-dark-mustard-500 font-bold leading-[22px] tracking-[0.3px] rounded-lg py-3 px-4 min-w-[120px] ",
    secondary:
      "bg-transparent text-primary-500 font-medium underline-offset-4 hover:underline",
    tertiary:
      "bg-light-mustard-500 h-10 px-4 !text-dark-mustard-50 py-2 rounded-full items-center text-bold tracking-[.3px] justify-center whitespace-nowrap",
  },
};

interface LinkProps extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
  variant?: string;
  href: string;
}

const LinkButton: FC<LinkProps> = ({
  href,
  children,
  className,
  variant,
  disabled,
  ...props
}) => {
  const varinntType = variant ?? "primary";

  return (
    <Link
      href={href}
      className={clsx(`
        ${classes.base}
        ${classes?.variant[varinntType]}
        ${disabled && classes.disabled}
        ${className}
    `)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
