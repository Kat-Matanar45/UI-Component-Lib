import type { ReactNode } from "react";

export interface IButton {
    text: string,
    icon?: ReactNode,
    size?: "small" | "medium" | "large",
    variant?: "primary" | "secondary" | "danger" | "gradient" | "outline",
    fullWidth?: boolean,
    isDisabled?: boolean,
    onClick?: () => void
}