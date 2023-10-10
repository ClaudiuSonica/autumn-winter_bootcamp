import "./ConstPage.scss";

import orangeRect from "/images/orange-rect.svg";
import yellowRect from "/images/yellow-rect.svg";

const ConstPage = () => {
  return (
    <div className="page__example">
      <div className="row-first">
        <img src={orangeRect} alt="orange rectangle" />
        <span className="blue-rect-small"></span>
      </div>
      <div className="row-second">
        <span className="blue-rect-big"></span>
      </div>
      <div className="row-third">
        <img src={yellowRect} alt="yellow rectangle" />
        <img src={yellowRect} alt="yellow rectangle" />
        <img src={yellowRect} alt="yellow rectangle" />
      </div>
    </div>
  );
};

export default ConstPage;
