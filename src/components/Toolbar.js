import { useState } from "react";
import { notificationsIcon } from "../images";
import "./Toolbar.scss";
import Dialog from "./Dialog";
import { useContext } from "react";
import { AppContext } from "../shared/app-context";

const Toolbar = () => {
  const appCtx = useContext(AppContext);
  const keys = Object.keys(appCtx);
  console.log(keys);
  const [buttonClicked, setButtonClicked] = useState("");
  const handleOnClick = (e) => {
    console.log("handleOnClick", e.target.id);
    setButtonClicked(e.target.id);
  };
  return (
    <div className="topnav">
      {keys.map((item, index) => {
        return (
          <button key={index} onClick={handleOnClick} aria-describedby="xyz">
            <img src={notificationsIcon} id={item} alt="bell-icon" />
            <span className="visually-hidden">One two three</span>
          </button>
        );
      })}
      {buttonClicked && (
        <Dialog close={setButtonClicked} item={buttonClicked} />
      )}
    </div>
  );
};
export default Toolbar;
