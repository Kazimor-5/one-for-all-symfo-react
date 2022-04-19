import "./home.css";
import { userData } from "../../dummyData";
import Widget from "../../components/widget/Widget";


export default function Home() {
  return (
    <div className="home">
      <div className="homeWidgets">
        <Widget/>
      </div>
    </div>
  );
}