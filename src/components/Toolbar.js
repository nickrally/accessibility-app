import { useState } from "react";
import { notificationsIcon } from "../images";
import "./Toolbar.scss";
import Dialog from "./Dialog";

const Toolbar = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleOnClick = () => {
    console.log("handleOnClick");
    setButtonClicked(true);
  };
  return (
    <div className="topnav">
      <button onClick={handleOnClick}>
        <img src={notificationsIcon} alt="bell-icon" />
      </button>
      {buttonClicked && <Dialog close={setButtonClicked} />}
    </div>
  );
};
export default Toolbar;
