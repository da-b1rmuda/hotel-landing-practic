import "./style.scss";
import { HomeHeaderNavbar } from "../../../Futures/index";
export function HomeHeader() {
  return (
    <div className="HomeHeader-container">
      <div className="HomeHeader-info">
        <div className="HomeHeader-logo-and-number">
          <img src="/logo.svg" alt="logo" />
          <a href="#">+7&nbsp;495&nbsp;322 54&nbsp;48</a>
        </div>
        <div className="HomeHeader-account">
          <a href="#">
            <img src="/keyboard_tab.svg" alt="icon" />
            Личный кабинет
          </a>
        </div>
      </div>
      <HomeHeaderNavbar />
    </div>
  );
}
