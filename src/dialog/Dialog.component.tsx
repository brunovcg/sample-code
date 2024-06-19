import { StyledDialog, StyledDialogButton } from "./Dialog.styled";
import { DialogProps } from "./Dialogs.types";
import { Button } from "../components";
import { useEffect, useRef } from "react";
import { Utils } from "../utils";
import { useDialog } from ".";
import { useOnClickOutside, useOnKeyPress, useViewport } from "../hooks";

export default function Dialog({
  content,
  title,
  buttons,
  width,
  height,
  closeOnOutsideClick,
  defaultCloseIcon = true,
  defaultCloseButton = true,
  disableClose,
  maxHeight,
  minHeight,
  maxWidth,
  minWidth,
  dialogId,
  onCancel,
}: Readonly<DialogProps>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useViewport();
  const { closeDialog } = useDialog();

  const handleCloseDialog = () => {
    onCancel?.();
    closeDialog(dialogId);
  };

  const buttonClasses = Utils.conditionalClass({
    ["im-dialog-buttons"]: true,
    ["im-mobile-dialog-buttons"]: isMobile,
  });

  const hasButtons = !!buttons || defaultCloseButton;

  const buttonsPortal = `im-buttons-portal-${dialogId}`;

  const handleAddedButtons =
    buttons &&
    Utils.filterMap(
      buttons,
      (button) => !button.hide && button.show !== false,
      (button) => {
        Reflect.deleteProperty(button, "hide");
        return <Button key={button.text as string} {...button} />;
      }
    );

  const dialogRef = useRef<HTMLDialogElement>(null);

  useOnKeyPress({
    keys: ["Escape"],
    target: dialogRef,
    enabled:
      (!!defaultCloseIcon || closeOnOutsideClick || defaultCloseButton) &&
      !disableClose,
    callback: handleCloseDialog,
  });

  useOnClickOutside(
    containerRef,
    handleCloseDialog,
    !!closeOnOutsideClick && !disableClose
  );

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  return (
    <StyledDialog
      className={`im-dialog ${dialogId}`}
      ref={dialogRef}
      open
      id={dialogId}
      $width={width}
      $height={height}
      $maxHeight={maxHeight}
      $minHeight={minHeight}
      $maxWidth={maxWidth}
      $minWidth={minWidth}
    >
      <div className="im-dialog-container" ref={containerRef} tabIndex={0}>
        <h3 className="im-dialog-title">{title}</h3>
        <div className="im-dialog-content">{content}</div>
        {defaultCloseIcon && (
          <div className="im-dialog-close-icon">
            <Button
              icon="close"
              onClick={handleCloseDialog}
              disabled={disableClose}
              variant="grey"
            />
          </div>
        )}
        <StyledDialogButton className="im-dialog-buttons-wrapper">
          {hasButtons && (
            <div className={buttonClasses}>
              <div id={buttonsPortal} className="im-dialog-buttons-portal" />
              {handleAddedButtons}
              {defaultCloseButton && (
                <Button
                  icon="close"
                  text={"Close"}
                  onClick={handleCloseDialog}
                  variant="error"
                  disabled={disableClose}
                />
              )}
            </div>
          )}
        </StyledDialogButton>
      </div>
    </StyledDialog>
  );
}
