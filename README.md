# React-Toastora

A lightweight library for managing toast notifications in your React projects.

## Installation

Install react-toastora using npm:

```bash
npm install react-toastora
```

## Getting Started

Import `ToastContainer` and `toast` from react-toastora, then add `ToastContainer` to your app.

Toast notifications will be rendered inside the `ToastContainer`.

```tsx
import { ToastContainer, toast } from "react-toastora";

function App() {
  const notify = () => {
    toast.success("Changes saved!");
  };

  return (
    <div>
      <button onClick={notify}>Update Profile</button>
      <ToastContainer theme="dark" />
    </div>
  );
}
```

That's it! You can now trigger toast notifications from anywhere in your React application.

## Notification Types

react-toastora supports different types of notifications for different use cases.

| Type      | Example                                          |
| --------- | ------------------------------------------------ |
| `default` | `toast.default("You have a new notification!")`  |
| `success` | `toast.success("Your changes have been saved!")` |
| `error`   | `toast.error("Something went wrong!")`           |
| `info`    | `toast.info("Your session will expire soon.")`   |
| `warning` | `toast.warning("Your storage is full.")`         |

## Options

react-toastora provides additional options to customize your notifications.

| Option            | Type                              | Description                                                                                                     |
| ----------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `desc`            | `string`                          | Optional description displayed below the toast title.                                                           |
| `duration`        | `number`                          | Duration in milliseconds before the toast is automatically dismissed.                                           |
| `customComponent` | `ComponentType<CustomToastProps>` | Custom React component used to render the toast.                                                                |
| `containerId`     | `string`                          | Identifies the `ToastContainer` where the toast should be rendered. Only needed when using multiple containers. |

### Example

```tsx
toast.success("Changes saved!", {
  desc: "Your profile has been updated successfully.",
  duration: 5000,
});
```

## Customization

react-toastora provides two ways to customize your toast notifications:

- **CSS Variables** — Customize the look and feel of the default toast.
- **Custom Component** — Completely customize how the toast is rendered.

### CSS Variables

Customize the look and feel of the default toast by overriding the provided CSS variables in your application's `:root` selector.

```css
:root {
  /* Typography and toast shape */
  --toastora-title-font-size: 16px;
  --toastora-desc-font-size: 12px;
  --toastora-title-font-weight: 600;
  --toastora-desc-font-weight: 400;
  --toastora-title-line-height: 20px;
  --toastora-desc-line-height: 16px;
  --toastora-border-radius: 10px;
  --toastora-border-width: 2px;

  /* Success toast — light theme */
  --toastora-success-bg: #ffffff;
  --toastora-success-title: #166534;
  --toastora-success-desc: #15803d;
  --toastora-success-icon: #166534;
  --toastora-success-border: #166534;
  --toastora-success-progress: #166534;

  /* Success toast — dark theme */
  --toastora-success-bg-dark: #18181b;
  --toastora-success-title-dark: #4ae683;
  --toastora-success-desc-dark: #a1a1aa;
  --toastora-success-icon-dark: #4ae683;
  --toastora-success-border-dark: #4ae683;
  --toastora-success-progress-dark: #4ae683;

  /* Info toast — light theme */
  --toastora-info-bg: #ffffff;
  --toastora-info-title: #1e40af;
  --toastora-info-desc: #1d4ed8;
  --toastora-info-icon: #1e40af;
  --toastora-info-border: #1e40af;
  --toastora-info-progress: #1e40af;

  /* Info toast — dark theme */
  --toastora-info-bg-dark: #18181b;
  --toastora-info-title-dark: #549bed;
  --toastora-info-desc-dark: #a1a1aa;
  --toastora-info-icon-dark: #549bed;
  --toastora-info-border-dark: #549bed;
  --toastora-info-progress-dark: #549bed;

  /* Warning toast — light theme */
  --toastora-warning-bg: #ffffff;
  --toastora-warning-title: #92400e;
  --toastora-warning-desc: #b45309;
  --toastora-warning-icon: #92400e;
  --toastora-warning-border: #92400e;
  --toastora-warning-progress: #92400e;

  /* Warning toast — dark theme */
  --toastora-warning-bg-dark: #18181b;
  --toastora-warning-title-dark: #e8bf38;
  --toastora-warning-desc-dark: #a1a1aa;
  --toastora-warning-icon-dark: #e8bf38;
  --toastora-warning-border-dark: #e8bf38;
  --toastora-warning-progress-dark: #e8bf38;

  /* Error toast — light theme */
  --toastora-error-bg: #ffffff;
  --toastora-error-title: #991b1b;
  --toastora-error-desc: #b91c1c;
  --toastora-error-icon: #991b1b;
  --toastora-error-border: #991b1b;
  --toastora-error-progress: #991b1b;

  /* Error toast — dark theme */
  --toastora-error-bg-dark: #18181b;
  --toastora-error-title-dark: #f36161;
  --toastora-error-desc-dark: #a1a1aa;
  --toastora-error-icon-dark: #f36161;
  --toastora-error-border-dark: #f36161;
  --toastora-error-progress-dark: #f36161;

  /* Default toast — light theme */
  --toastora-default-bg: #ffffff;
  --toastora-default-title: #18181b;
  --toastora-default-desc: #71717a;
  --toastora-default-icon: #18181b;
  --toastora-default-border: #18181b;
  --toastora-default-progress: #18181b;

  /* Default toast — dark theme */
  --toastora-default-bg-dark: #18181b;
  --toastora-default-title-dark: #fafafa;
  --toastora-default-desc-dark: #a1a1aa;
  --toastora-default-icon-dark: #fafafa;
  --toastora-default-border-dark: #fafafa;
  --toastora-default-progress-dark: #fafafa;
}
```

You only need to override the variables you want to change. The remaining variabes will use react-toastora's default values.

### Custom Component

For complete control over the toast's appearance and structure, you can provide your own React component using the `customComponent` option.

#### CustomToastProps

| Prop           | Type          | Description                                       |
| -------------- | ------------- | ------------------------------------------------- |
| `id`           | `number`      | The unique ID of the toast.                       |
| `type`         | `ToastTypes`  | The type of toast.                                |
| `title`        | `string`      | The title of the toast.                           |
| `state`        | `ToastStates` | The current state of the toast.                   |
| `desc`         | `string`      | An optional description for the toast.            |
| `duration`     | `number`      | The duration of the toast in milliseconds.        |
| `containerId`  | `string`      | The ID of the container displaying the toast.     |
| `theme`        | `string`      | The theme of the toast, either `dark` or `light`. |
| `dismissToast` | `() => void`  | A function that dismisses the toast.              |

#### Example

```tsx
import type { CustomToastProps } from "react-toastora";

const CustomToast = ({ title, desc, dismissToast }: CustomToastProps) => {
  return (
    <div className="custom-toast">
      <strong>{title}</strong>
      {desc && <p>{desc}</p>}

      <button type="button" onClick={dismissToast}>
        Dismiss
      </button>
    </div>
  );
};
```

Use it with the `customComponent` option:

```tsx
toast.success("Profile updated successfully!", {
  customComponent: CustomToast,
});
```

## Changelog

See the [GitHub Releases](https://github.com/ankurmehta102/react-toastora/releases) for the latest changes and version history.
