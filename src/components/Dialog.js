import "./Dialog.scss";

import { createPortal } from "react-dom";

const Dialog = (props) => {
  const dialog = document.getElementById("dialog");
  return createPortal(
    <div
      id="dialog"
      role="dialog"
      aria-labelledby="title"
      aria-describedby="description"
    >
      <h2 id="title">Title of the dialog</h2>
      <p id="description">Information provided by the dialog.</p>
      <button className="x-button" onClick={() => props.close(false)}>
        X
      </button>
    </div>,
    dialog
  );
};
export default Dialog;
