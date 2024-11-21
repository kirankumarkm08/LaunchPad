import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border-0 px-2.5 py-0.5 text-sm  transition-colors focus:outline-none focus:ring-0",
  {
    variants: {
      variant: {
        default:
          "dark:text-dark-text-700 px-2.5 py-1 rounded-full font-medium  bg-light-black-10  text-light-text-700 dark:bg-dark-black-10 capitalize",
        green:
          "dark:text-dark-green-500 px-2.5 py-1 rounded-full font-medium  bg-light-green-50  text-light-green-500 dark:bg-dark-green-50 capitalize",
        blue: "dark:text-dark-blue-500 px-2.5 py-1  tracking-[0.7px] rounded-md uppercase font-bold  bg-light-blue-50  text-light-blue-500 dark:bg-dark-blue-50",
        destructive: " text-light-text-50 px-4 py-2  tracking-[0.7px] rounded-md  font-bold  bg-light-red-500 ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
