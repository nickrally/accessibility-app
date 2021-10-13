import "./Dialog.scss";

import { createPortal } from "react-dom";

const Dialog = (props) => {
  const dialog = document.getElementById("dialog");
  return createPortal(
    <div id="notification-desc">
      <h3>Good Paintings</h3>
      Very good paintings.
      <table>
        <caption>Not some garbage by Rothko or Pollack</caption>
        <tr>
          <th scope="col">Painter</th>
          <th scope="col">Title</th>
          <th scope="col">Subject</th>
        </tr>

        <tr>
          <th scope="row">Kiprenski</th>
          <td>Portrait of unknown woman</td>
          <td>Possibly a call girl</td>
        </tr>

        <tr>
          <th scope="row">Repin</th>
          <td>Portrait of Musorgsky</td>
          <td>A drunkard composer</td>
        </tr>
      </table>
      <button className="x-button" onClick={() => props.close(false)}>
        X
      </button>
    </div>,
    dialog
  );
};
export default Dialog;
