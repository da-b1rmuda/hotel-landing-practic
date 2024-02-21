import "./style.scss";
import { Button } from "../../../Shared/ui/Button/Button";
export function ContentTour() {
  return (
    <div className="ContentTour-container">
      <div className="ContentTour-item">
        <p>Город вылета</p>
        <select name="city" id="city">
          <option value="sp">Санкт-Петербург</option>
        </select>
      </div>
      <div className="ContentTour-item">
        <p>Страна</p>
        <select name="country" id="country">
          <option value="aust">Австралия</option>
        </select>
      </div>
      <div className="ContentTour-item">
        <p>Дата прибытия</p>
        <select
          className="ContentTour-item-date"
          name="country"
          id="country"
          style={{
            background: "url(calendar_today.svg) no-repeat right center",
            appearance: "none",
          }}
        >
          <option value="aust">18.10.2021ㅤㅤㅤ</option>
        </select>
      </div>
      <div className="ContentTour-item">
        <p>Ночей</p>
        <select
          className="ContentTour-item-count"
          name="country"
          id="country"
          style={{
            background: "url(tour-counter.svg) no-repeat right center",
            appearance: "none",
          }}
        >
          <option value="aust">6ㅤㅤㅤ</option>
        </select>
      </div>
      <div className="ContentTour-item">
        <p>Туристы</p>
        <select
          className="ContentTour-item-count"
          name="country"
          id="country"
          style={{
            background: "url(tour-counter.svg) no-repeat right center",
            appearance: "none",
          }}
        >
          <option value="aust">2ㅤㅤㅤ</option>
        </select>
      </div>
      <div className="ContentTour-button">
        <Button>Найти</Button>
      </div>
    </div>
  );
}
