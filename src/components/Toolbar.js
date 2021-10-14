import { useState, useRef } from "react";
import { notificationsIcon } from "../images";
import "./Toolbar.scss";
import Dialog from "./Dialog";
import { useContext } from "react";
import { AppContext } from "../shared/app-context";

const Toolbar = () => {
  const btnRef = useRef();
  const appCtx = useContext(AppContext);
  const str = JSON.stringify(appCtx.foobar);
  console.log("str", str);
  const keys = Object.keys(appCtx);

  const [buttonClicked, setButtonClicked] = useState("");

  const handleOnClick = (e) => {
    setButtonClicked(e.target.id);
  };
  const parseData = (item) => {
    let reg1 = /\[|\]/g;
    let reg2 = /\{|\}/g;
    return JSON.stringify(appCtx[item]).replace(reg1, "").replace(reg2, "");
  };
  return (
    <div className="topnav">
      {keys.map((item, index) => {
        return (
          <button
            key={index}
            id={item}
            onClick={handleOnClick}
            ref={btnRef}
            aria-describedby="xyz"
          >
            <img src={notificationsIcon} id={item} alt="bell-icon" />
            <span className="visually-hidden">{parseData(item)}</span>
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
