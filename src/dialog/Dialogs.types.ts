import { ReactNode, RefObject } from "react";
import { ButtonProps } from "@/components";
import { dialogIds } from ".";

export type DialogId = keyof typeof dialogIds;

export type DialogSubscriptions = {
  [id: string]: { component: ReactNode; buttonsPortal: string };
};

export type ConditionalProps<CurrentDialogId extends DialogId> = Parameters<
  (typeof dialogIds)[CurrentDialogId]
>[number] extends never
  ? { props?: Parameters<(typeof dialogIds)[CurrentDialogId]>[number] }
  : { props: Parameters<(typeof dialogIds)[CurrentDialogId]>[number] };

export type OpenDialog = <ComponentRef, CurrentDialogId extends DialogId>({
  id,
  props,
}: {
  id: CurrentDialogId;
  ref?: RefObject<ComponentRef>;
} & ConditionalProps<CurrentDialogId>) => void;

export type CloseDialog = (dialogId: DialogId) => void;

export type OpenArgs<CurrentDialogId extends DialogId> =
  ConditionalProps<CurrentDialogId> & {
    id: CurrentDialogId;
  };

export type DialogContextProps = {
  openDialog: OpenDialog;
  closeDialog: CloseDialog;
  dialogSubscriptions: DialogSubscriptions;
};

export type DialogsProviderProps = {
  children: ReactNode;
  portalId?: string;
};

export type StyledDialogProps = {
  $width?: string;
  $height?: string;
  $maxHeight?: string;
  $minHeight?: string;
  $maxWidth?: string;
  $minWidth?: string;
};

type DialogButtonsConditional =
  | { hide?: boolean; show?: never }
  | { hide?: never; show?: boolean };

export type DialogButtons = (ButtonProps & DialogButtonsConditional)[];

export type DialogProps = {
  content: string | ReactNode;
  title: string;
  buttons?: DialogButtons;
  closeOnOutsideClick?: boolean;
  defaultCloseButton?: boolean;
  defaultCloseIcon?: boolean;
  dialogId: DialogId;
  onCancel?: () => void;
  width?: string;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
  maxWidth?: string;
  minWidth?: string;
  disableClose?: boolean;
};
