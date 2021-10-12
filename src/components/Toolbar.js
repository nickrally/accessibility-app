import { notificationsIcon, searchIcon, userIcon } from "../images";
import "./Toolbar.scss";

const Toolbar = () => {
  return (
    <div className="topnav">
      <button
        aria-labelledby="notifications-label"
        onClick={() => alert("You've been notified!")}
      >
        <img src={notificationsIcon} alt="bell-icon" />
      </button>
      <div role="tooltip" id="notifications-label">
        Notifications
      </div>
      <a
        href="https://duckduckgo.com/?q=search&kp=-1&kl=us-en"
        aria-labelledby="search-label"
      >
        <img src={searchIcon} alt="magnifying-glass-icon" />
      </a>
      <div role="tooltip" id="search-label">
        Search
      </div>
      <button aria-describedby="user-desc">
        <img src={userIcon} alt="user-icon" />
        <span className="visually-hidden">
          This is a very long description blah blah blah
        </span>
      </button>
      <div role="tooltip" id="user-desc">
        User
      </div>
    </div>
  );
};
export default Toolbar;
