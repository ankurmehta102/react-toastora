import { useCallback, memo } from "react";
import store from "../store/ToastStore";
import type { ToastItemProps } from "../toasts/types";
import Toast from "./Toast";
import Transition from "./Transition";

function ToastItem({ toast, containerId, theme }: ToastItemProps) {
  const ToastComponent = toast.customComponent ?? Toast;
  const toastId = toast.id;

  const onTransitionEnd = useCallback(() => store.remove(toastId), [toastId]);
  const dismissToast = useCallback(
    () => store.updateState(toastId, "exiting"),
    [toastId],
  );

  return (
    <>
      <Transition
        duration={300}
        isExiting={toast.state === "exiting"}
        onTransitionEnd={onTransitionEnd}
      >
        <ToastComponent
          id={toastId}
          type={toast.type}
          title={toast.title}
          desc={toast?.desc}
          state={toast.state}
          duration={toast?.duration}
          containerId={containerId}
          theme={theme}
          dismissToast={dismissToast}
        />
      </Transition>
    </>
  );
}

export default memo(ToastItem);
