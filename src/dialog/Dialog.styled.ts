import styled from "styled-components";
import { StyledDialogProps } from "./Dialogs.types";
import Configs from "../configs";

const mobileBreakpoint = `${Configs.mobileBreakpoint}px`;

export const StyledDialog = styled.dialog<StyledDialogProps>`
  background-color: var(--background-light-opacity);
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  .im-dialog-container {
    width: ${(props) => props.$width ?? "fit-content"};
    height: ${(props) => props.$height ?? "fit-content"};
    max-height: ${(props) => props.$maxHeight ?? "95vh"};
    min-height: ${(props) => props.$minHeight ?? "240px"};
    max-width: ${(props) => props.$maxWidth ?? "92vw"};
    min-width: ${(props) => props.$minWidth ?? "280px"};
    padding: 35px 20px 20px 20px;
    background: var(--background-light-color);
    border: 1px solid var(--border-light-color);
    border-radius: var(--container-border-radius);
    box-shadow: var(--background-box-shadow);
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    overflow: hidden;

    @media (max-width: ${mobileBreakpoint}) {
      max-height: 90vh;
    }

    .im-dialog-close-icon {
      position: absolute;
      top: 0;
      right: 0;
      margin: 10px 10px 0 0;
    }

    .im-dialog-title {
      display: flex;
      flex-wrap: wrap;
      min-height: 25px;
      font-size: var(--text);
      font-weight: bold;
      color: var(--primary-color);
      margin-top: 5px;
      margin-bottom: 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .im-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .im-dialog-content {
      margin-top: 10px;
      flex: 1;
      margin-bottom: 20px;
      overflow: auto;
      display: flex;
      border: 1px solid var(--border-light-color);
      padding: 5px;
    }
  }
`;

export const StyledDialogButton = styled.div`
  display: flex;
  margin-top: 10px;

  .im-dialog-buttons-portal {
    display: flex;
    gap: 10px;
  }

  .im-dialog-buttons:not(.im-mobile-dialog-buttons) {
    display: flex;
    gap: 5px 15px;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex: 1;
  }

  .im-mobile-dialog-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
    width: 100%;

    .im-dialog-buttons-portal {
      flex-direction: column;
      gap: 5px 15px;
    }

    .im-button {
      width: 100%;
    }
  }
`;
