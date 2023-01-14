import React from "react";
import { ImSpinner2 } from "react-icons/im";

import clsxm from "@/lib/helpers/clsxm";

const ButtonVariant = ["primary", "outline", "ghost", "light", "dark"] as const;

type ButtonProps = {
  isLoading?: boolean;
  variant?: typeof ButtonVariant[number];
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = "primary",
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={clsxm(
          "inline-flex items-center rounded-md px-4 py-2 font-semibold",
          "focus:outline-none focus-visible:ring focus-visible:ring-primary-500",
          "font-primary shadow-sm",
          "transition duration-200 ease-in",
          [
            variant === "primary" && [
              "bg-primary-500 text-white",
              "border border-primary-600",
              "hover:bg-primary-600",
              "active:bg-primary-500",
              "disabled:bg-primary-400 disabled:hover:bg-primary-400",
            ],
            variant === "outline" && [
              "text-primary-500 dark:text-primary-300",
              "border border-primary-500",
              "hover:bg-primary-200 active:bg-primary-100 disabled:bg-primary-100 dark:hover:bg-primary-600",
              "hover:border-primary-200 dark:hover:border-primary-700",
            ],
            variant === "ghost" && [
              "text-primary-500",
              "shadow-none",
              "hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100",
            ],
            variant === "light" && [
              "bg-white text-black",
              "border border-gray-300",
              "hover:bg-charcoal-100",
              "active:bg-white/80 disabled:bg-gray-200",
            ],
            variant === "dark" && [
              "bg-gray-900 text-white",
              "border border-gray-600",
              "active:bg-gray-700 disabled:bg-gray-700",
              "hover:bg-charcoal-500",
            ],
          ],
          "disabled:cursor-not-allowed",
          isLoading &&
            "relative text-transparent hover:text-transparent disabled:cursor-wait",
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              {
                "text-white": ["primary", "dark"].includes(variant),
                "text-black": ["light"].includes(variant),
                "text-primary-500": ["outline", "ghost"].includes(variant),
              }
            )}
          >
            <ImSpinner2 className="animate-spin" />
          </div>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
