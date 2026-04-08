import type {
  FC,
  ReactNode,
  DetailedHTMLProps,
  AnchorHTMLAttributes,
} from "react";
import cn from "classnames";
import styles from "./button.module.css";

interface LinkProps extends DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> {
  children: ReactNode;
  disabled?: boolean;
  variant?: "default" | "primary";
}

export const Link: FC<LinkProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <a
      className={cn(
        styles.rootButton,
        { [styles.default!]: variant === "default" },
        { [styles.primary!]: variant === "primary" },
      )}
      {...props}
    >
      {children}
    </a>
  );
};
