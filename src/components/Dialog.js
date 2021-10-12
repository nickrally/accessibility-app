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
      <div id="title">Title</div>
      <div id="description">Information about whatever goes here</div>
      <button
        className="x-button"
        aria-label="close"
        onClick={() => props.close(false)}
      >
        X
      </button>
    </div>,
    dialog
  );
};
export default Dialog;
