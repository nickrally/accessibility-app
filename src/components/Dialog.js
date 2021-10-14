import "./Dialog.scss";

import { createPortal } from "react-dom";
import Table from "./Table";

const Dialog = (props) => {
  const { close, item } = props;
  console.log("in Dialog, item:", item);
  const dialog = document.getElementById("dialog");
  return createPortal(
    <div id="xyz" role="dialog">
      <h3>Dialog Title</h3>
      <p>Information provided by the dialog.</p>
      <Table item={item} />
      <button className="x-button" onClick={() => close("")}>
        X
      </button>
    </div>,
    dialog
  );
};
export default Dialog;
