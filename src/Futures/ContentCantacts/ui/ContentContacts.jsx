import "./style.scss";
import { Button } from "../../../Shared/ui/Button/Button";
export function ContentContacts() {
  return (
    <div className="ContentContacts-container">
      <div className="ContentContacts-info-container">
        <div className="ContentContacts-text">
          <div className="ContentContacts-title">
            <h3>Адрес</h3>
          </div>
          <div className="ContentContacts-description">
            <p style={{ width: "240px" }}>
              Москва, улица Юности, дом 5&nbsp;строение&nbsp;4, офис&nbsp;2
            </p>
          </div>
        </div>
        <div className="ContentContacts-text">
          <div className="ContentContacts-title">
            <h3>Телефон</h3>
          </div>
          <div className="ContentContacts-description">
            <p style={{ color: "#CC9933" }}>+7 (499) 535-64-34</p>
            <p style={{ color: "#CC9933" }}>+7 (495) 005-05-44</p>
          </div>
        </div>
        <div className="ContentContacts-text">
          <div className="ContentContacts-title">
            <h3>E-mail</h3>
          </div>
          <div className="ContentContacts-description">
            <p style={{ color: "#CC9933" }}>lg.oona@mail.ru</p>
            <p style={{ color: "#999999" }}>по вопросам бронирования</p>
            <p style={{ color: "#CC9933" }}>hotels.ln@mail.ru</p>
            <p style={{ color: "#999999" }}>по вопросам сотрудничества</p>
          </div>
        </div>
        <div className="ContentContacts-text">
          <div className="ContentContacts-title">
            <h3>График</h3>
          </div>
          <div className="ContentContacts-description">
            <p style={{ width: "240px" }}>
              Понедельник&nbsp;&mdash; пятница, с&nbsp;10:00 до&nbsp;19:00
            </p>
          </div>
        </div>
        <div className="ContentContacts-button">
          <Button padding="27px 29px">Построить маршрут</Button>
        </div>
      </div>
      <div className="ContentContacts-cover">
        <img src="/contacts.png" alt="cover" />
      </div>
    </div>
  );
}
