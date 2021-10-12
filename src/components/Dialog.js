import "./Dialog.scss";

import { createPortal } from "react-dom";

const Dialog = (props) => {
  const dialog = document.getElementById("dialog");
  return createPortal(
    <div id="notification-desc" role="dialog">
      Information provided by the dialog.
      <button className="x-button" onClick={() => props.close(false)}>
        X
      </button>
    </div>,
    dialog
  );
};
export default Dialog;
