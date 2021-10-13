import "./Dialog.scss";

import { createPortal } from "react-dom";

const Dialog = (props) => {
  const dialog = document.getElementById("dialog");
  return createPortal(
    <div id="notification-desc" role="dialog">
      <h3>Title</h3>
      <p>Information provided by the dialog.</p>
      <table>
        <caption>Some caption</caption>
        <tbody>
          <tr>
            <th scope="col">Col1</th>
            <th scope="col">Col2</th>
            <th scope="col">Cal3</th>
          </tr>

          <tr>
            <th scope="row">Row1</th>
            <td>Foo</td>
            <td>ok</td>
          </tr>

          <tr>
            <th scope="row">Row2</th>
            <td>Bar</td>
            <td>notok</td>
          </tr>
        </tbody>
      </table>
      <button className="x-button" onClick={() => props.close(false)}>
        X
      </button>
    </div>,
    dialog
  );
};
export default Dialog;
