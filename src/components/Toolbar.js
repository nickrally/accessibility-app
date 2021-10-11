import { notificationsIcon } from "../images";
import "./Toolbar.scss";

const Toolbar = () => {
  return (
    <div className="topnav">
      <button
        aria-labelledby="notifications-label"
        title="foonotes"
        onClick={() => alert("You've been notified!")}
      >
        <img src={notificationsIcon} alt="altnotes" />
      </button>
      <div role="tooltip" id="notifications-label">
        barnotes
      </div>
    </div>
  );
};
export default Toolbar;
