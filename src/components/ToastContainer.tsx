import "../styles/ToastContainer.css";
import { useSyncExternalStore } from "react";
import type { ToastContainerProps } from "../toasts/types";
import store from "../store/ToastStore";
import ToastItem from "./ToastItem";
import { createPortal } from "react-dom";

function ToastContainer({
  position = "top-right",
  containerId = "default",
  theme = "light",
}: ToastContainerProps) {
  const toasts = useSyncExternalStore(store.subscribe, () =>
    store.getSnapshot(containerId),
  );

  return createPortal(
    <div className={`toastora-toasts toastora-toasts--${position}`}>
      {toasts.length !== 0 &&
        toasts.map((toast) => {
          return (
            <ToastItem
              key={toast.id}
              toast={toast}
              containerId={containerId}
              theme={theme}
            />
          );
        })}
    </div>,
    document.body,
  );
}

export default ToastContainer;
