import {
  ComponentType,
  Fragment,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  DialogContextProps,
  DialogSubscriptions,
  OpenArgs,
  DialogId,
  DialogsProviderProps,
} from "./Dialogs.types";

import { Portal } from "@/components";
import {
  Wrapper,
  WrapperAttributesOptionalChildren,
} from "../components/wrapper";
import { dialogIds } from ".";

export const DialogContext = createContext<DialogContextProps>({
  openDialog: () => {},
  closeDialog: () => {},
  dialogSubscriptions: {},
});

export function DialogProvider({
  children,
  portalId,
}: Readonly<DialogsProviderProps>) {
  const [dialogSubscriptions, setDialogSubscriptions] =
    useState<DialogSubscriptions>({} as DialogSubscriptions);

  const subscribedDialogsRenderer = Object.keys(dialogSubscriptions).map(
    (dialogKey) => (
      <Fragment key={dialogKey}>
        {dialogSubscriptions[`${dialogKey}`].component}
      </Fragment>
    )
  );

  const openDialog = useCallback(
    <
      ComponentProps extends WrapperAttributesOptionalChildren,
      CurrentDialogId extends DialogId,
    >({
      id,
      props,
    }: OpenArgs<CurrentDialogId>) => {
      const dialogComponent = dialogIds[id as keyof typeof dialogIds];

      setDialogSubscriptions((state) => ({
        ...state,
        [id]: {
          id,
          component: (
            <Wrapper
              component={
                dialogComponent as unknown as ComponentType<ComponentProps>
              }
              props={props as unknown as ComponentProps}
            >
              {" "}
            </Wrapper>
          ),

          buttonsPortal: `im-buttons-portal-${id}`,
        },
      }));
    },
    []
  );

  const closeDialog = useCallback((id: DialogId) => {
    setDialogSubscriptions((state) => {
      Reflect.deleteProperty(state, id);
      return { ...state };
    });
  }, []);

  const providerValue = useMemo(
    () => ({ closeDialog, openDialog, dialogSubscriptions }),
    [closeDialog, openDialog, dialogSubscriptions]
  );

  return (
    <DialogContext.Provider value={providerValue}>
      {children}
      {portalId ? (
        <Portal element={subscribedDialogsRenderer} targetId={portalId} />
      ) : (
        subscribedDialogsRenderer
      )}
    </DialogContext.Provider>
  );
}

export const useDialog = () => useContext(DialogContext);
