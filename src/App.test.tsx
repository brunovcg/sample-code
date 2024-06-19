import { screen, render, fireEvent } from "@testing-library/react";
import App from "./App";
import { DialogProvider } from "./dialog";
import { TestUtils } from "./utils";

describe("App Component", () => {
  test("It should open Correctly the Dialog when clicked on the open Button, and close when clicked on the close Button. If clicked outside and does not have ", async () => {
    render(
      <div>
        <DialogProvider portalId="dialog-root">
          <App />
        </DialogProvider>
        <div id="dialog-root"></div>
      </div>
    );

    const openButton = screen.getByText("Open Sample Dialog");
    expect(openButton).toBeInTheDocument();
    fireEvent.click(openButton);

    const dialog = screen.getByText("This is a template!");

    expect(dialog).toBeInTheDocument();

    const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;

    TestUtils.fireEventAtPosition(body, { clientX: 50, clientY: 50 });

    expect(dialog).toBeInTheDocument();

    const closeButton = screen.getByText("Close");

    fireEvent.click(closeButton);

    expect(dialog).not.toBeInTheDocument();
  });
});
