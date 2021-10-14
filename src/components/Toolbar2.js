import { useState } from "react";
import mnIcon from "../images/mn.png";
import "./Toolbar.scss";
import Dialog from "./Dialog";
import Button from "./Button";
import { useContext } from "react";
import { AppContext } from "../shared/app-context";

const Toolbar = () => {
  const appCtx = useContext(AppContext);
  const keys = Object.keys(appCtx);

  const [buttonClicked, setButtonClicked] = useState("");

  const handleOnClick = (e) => {
    console.log("e.target.id", e.target.id);
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
        const buttonCfg = {
          handleOnClick,
          parseData,
          item,
          index,
          imgSrc: mnIcon,
        };
        return <Button buttonCfg={buttonCfg} key={index} />;
      })}
      {buttonClicked && (
        <Dialog close={setButtonClicked} item={buttonClicked} />
      )}
    </div>
  );
};
export default Toolbar;
