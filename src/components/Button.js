import "./Button.scss";
const Button = ({ buttonCfg }) => {
  const {
    item,
    index,
    imgSrc,
    btnRef,
    onClickHandler,
    parseData,
    dialogOpened,
  } = buttonCfg;
  console.log("in Button, item:", item);
  console.log("in Button, dialogOpened:", dialogOpened);
  return (
    <button
      key={index}
      id={item}
      onClick={onClickHandler}
      ref={btnRef}
      aria-describedby="xyz"
      aria-haspopup="true"
      aria-expanded={dialogOpened}
    >
      <img src={imgSrc} id={item} alt="bell-icon" />
      <span className="visually-hidden">{parseData(item)}</span>
    </button>
  );
};

export default Button;
