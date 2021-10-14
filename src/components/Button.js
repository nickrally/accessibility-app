import "./Button.scss";
const Button = ({ buttonCfg }) => {
  const { item, index, imgSrc, btnRef, handleOnClick, parseData } = buttonCfg;
  console.log("in Button, item:", item);
  return (
    <button
      key={index}
      id={item}
      onClick={handleOnClick}
      ref={btnRef}
      aria-describedby="xyz"
    >
      <img src={imgSrc} id={item} alt="bell-icon" />
      <span className="visually-hidden">{parseData(item)}</span>
    </button>
  );
};

export default Button;
