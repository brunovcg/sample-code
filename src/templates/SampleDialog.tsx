import { Dialog, DialogButtons, useDialog } from "@/dialog";

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
