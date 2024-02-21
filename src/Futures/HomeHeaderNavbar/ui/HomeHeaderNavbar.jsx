import "./style.scss";
import { Button } from "../../../Shared/ui/Button/Button";
export function HomeHeaderNavbar() {
  return (
    <div className="HomeHeaderNavbar-container">
      <div className="HomeHeaderNavbar-navigation">
        <nav role="navigation" aria-label="Main navigation">
          <ul>
            <li>
              <a href="#home">О нас</a>
            </li>
            <li>
              <a href="#about">Услуги</a>
            </li>
            <li>
              <a href="#services">Преимущества</a>
            </li>
            <li>
              <a href="#contact">Размещение</a>
            </li>
            <li>
              <a href="#contact">Блог</a>
            </li>
            <li>
              <a href="#contact">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="HomeHeaderNavbar-buttons">
        <Button>Хочу тур</Button>
        <Button>Обрантый звонок</Button>
      </div>
    </div>
  );
}
