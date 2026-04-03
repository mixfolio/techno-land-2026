import type {
  FC,
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from "react";
import cn from "classnames";
import styles from "./button.module.css";

interface ButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  children: ReactNode;
  disabled?: boolean;
  variant?: "default" | "primary";
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        styles.rootButton,
        { [styles.default!]: variant === "default" },
        { [styles.primary!]: variant === "primary" },
      )}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
