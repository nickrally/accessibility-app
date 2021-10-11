import { searchIcon } from "../images";
import "./Content.scss";

const Content = ({ info }) => {
  const searchUrl = `https://duckduckgo.com/?q=${info}&kp=-1&kl=us-en`;
  const tooltipText = `Look for ${info}`;
  return (
    <div className="content">
      <div>Currently selected: {info}</div>
      <a href={searchUrl} title={tooltipText}>
        Search for {info}
      </a>
    </div>
  );
};

export default Content;
