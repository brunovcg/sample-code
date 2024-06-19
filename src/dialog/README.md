# Dialog Builder

Component all typescript based with intelisense and type check.

## Template Creation

You must create templates
It should always return Dialog component that must receive as props: Title, Content and Dialog Id (Prefer to set as the function name, than register it as shown on the next)
There are some optional props as: closeOnOutsideClick, disableClose, width.
This Component is responsive.
You can call the useDialog hook inside that dialog template and use the "closeDialog" function passing it own id or from another dialog
dialogId prop will show an type error until you registrate this template as shown on next step

```js
export default function SampleDialog() {
  const { closeDialog } = useDialog();

  const buttons: DialogButtons = [
    {
      text: "Done",
      icon: "done",
      onClick: () => {
        alert("Done Clicked");
        closeDialog("SampleDialog");
      },
    },
  ];

  return (
    <Dialog
      content={
        <div>
          <p>This is a template!</p>
          <p>Press Done!</p>
        </div>
      }
      dialogId="SampleDialog"
      closeOnOutsideClick
      title="Sample Dialog"
      buttons={buttons}
    />
  );
}


```

## Template Registration

The dialog id must be registered in [Dialog Registration](./Dialog.registration.ts)

```js
import SampleDialog from "@/templates/SampleDialog";

export const dialogIds = { SampleDialog };
```

## Dialog Instantiation

This is a dialog manager component where we can call for dialog instancies by using the hook inside a component:

```js
import { useDialog } from "@/dialog";

function MyComponent() {
  const { openDialog } = useDialog();

  return (
    <div>
      <button onClick={() => openDialog({ id: "MyDialogId" })}>Open</button>
      <p>Anything</p>
    </div>
  );
}
```

## Dialog Provider

Note that this component has a provider on [main](../main.tsx).
It has a portalId if we want to render in three different from the one that the project uses.
This is step is only made once.

```js
<React.StrictMode>
  <DialogProvider portalId="dialog-root">
    <GlobalStyles />
    <App />
  </DialogProvider>
</React.StrictMode>
```
