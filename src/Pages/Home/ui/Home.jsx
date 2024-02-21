import { HomeContent, HomeFooter, HomeHeader } from "../../../Widgets";
import "./style.scss";

export function Home() {
  return (
    <div className="Home-wrapper">
      <div className="Home-container">
        <HomeHeader />
        <HomeContent />
        <HomeFooter />
      </div>
    </div>
  );
}
