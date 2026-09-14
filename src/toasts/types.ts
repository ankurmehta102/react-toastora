import { ComponentType } from "react";

export type ToastTypes = "default" | "success" | "error" | "info" | "warning";
export type ToastStates = "exiting" | "visible";
export type ThemeTypes = "dark" | "light";

export type Toast = {
  id: number;
  type: ToastTypes;
  title: string;
  state: ToastStates;
  desc?: string;
  duration?: number;
  containerId: string;
  customComponent?: ComponentType<CustomToastProps>;
};

export type ToastProps = {
  id?: number;
  type: ToastTypes;
  title: string;
  state: ToastStates;
  desc?: string;
  duration?: number;
  containerId: string;
  theme: ThemeTypes;
  dismissToast: () => void;
};
export type CustomToastProps = {
  id?: number;
  type?: ToastTypes;
  title?: string;
  state: ToastStates;
  desc?: string;
  duration?: number;
  containerId?: string;
  theme: ThemeTypes;
  dismissToast?: () => void;
};

export type CancelButtonProps = { onClick: () => void };
export type ToastOptions = {
  desc?: string;
  duration?: number;
  customComponent?: ComponentType<CustomToastProps>;
  containerId?: string;
};

export type ToastPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

export type ToastContainerProps = {
  position?: ToastPosition;
  containerId?: string;
  theme?: ThemeTypes;
};

export type TransitionProps = {
  duration: number;
  children: React.ReactNode;
  isExiting: boolean;
  onTransitionEnd: () => void;
};
