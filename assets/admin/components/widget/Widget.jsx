import "./Widget.css";
import { Visibility } from "@material-ui/icons";

export default function Widget() {
  return (
    <div className="widget">
      <span className="widgetTitle">New Join Members</span>
      <ul className="widgetList">
        <li className="widgetListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetImg"
          />
          <div className="widgetUser">
            <span className="widgetUsername">Anna Keller</span>
            <span className="widgetUserTitle">Software Engineer</span>
          </div>
          <button className="widgetButton">
            <Visibility className="widgetIcon" />
            Display
          </button>
        </li>
        </ul>
        </div>
      );
    }