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

  const [dialogOpened, setDialogOpened] = useState("");
  const [buttonClicked, setButtonClicked] = useState("");

  const onClickHandler = (e) => {
    console.log("e.target.id", e.target.id);
    setButtonClicked(e.target.id);
    setDialogOpened(e.target.id);
  };

  const onBlurHandler = (e) => {
    //it is div that being blurred or focused
    setDialogOpened(e.target.id); //this is id of div not button!
  };

  const onFocusHandler = (e) => {
    console.log("e.target.id", e.target.id); //this is id of div not button!
    setDialogOpened(e.target.id);
  };

  const parseData = (item) => {
    let reg1 = /\[|\]/g;
    let reg2 = /\{|\}/g;
    return JSON.stringify(appCtx[item]).replace(reg1, "").replace(reg2, "");
  };

  return (
    <div className="topnav" onBlur={onBlurHandler} onFocus={onFocusHandler}>
      {keys.map((item, index) => {
        const buttonCfg = {
          onClickHandler,
          parseData,
          item,
          index,
          imgSrc: mnIcon,
          dialogOpened,
        };
        return <Button buttonCfg={buttonCfg} key={index} />;
      })}
      {dialogOpened && <Dialog close={setButtonClicked} item={dialogOpened} />}
    </div>
  );
};
export default Toolbar;
