import { userIcon, notificationsIcon, searchIcon } from "../images";
import "./Toolbar.scss";

const Toolbar = () => {
  return (
    <div className="topnav">
      <img src={userIcon} alt="Home"></img>
      <img src={notificationsIcon} alt="Notifications"></img>
      <img src={searchIcon} alt="Search"></img>
    </div>
  );
};
export default Toolbar;
