import "./style.scss";
export function HomeFooter() {
  return (
    <div className="HomeFooter-container">
      <div className="HomeFooter-first">
        <p style={{ paddingBottom: "35px" }}>
          &copy;&nbsp;2012-2020 Управляющая компания Объединенной сети
          &laquo;Лагуна Хотелс&raquo;
        </p>
        <p style={{ paddingBottom: "40px" }}>
          Представленная на&nbsp;сайте информация носит справочный характер
          и&nbsp;не&nbsp;является публичной офертой
        </p>
        <a href="#">Пользовательское соглашение</a>
      </div>
      <div className="HomeFooter-second">
        <p style={{ paddingBottom: "8px" }}>
          11710, улица Юности, дом 5 строение 4, офис 2
        </p>
        <a>+7 (499) 535-64-34</a>
        <a style={{ paddingBottom: "10px" }}>+7 (495) 005-05-44</a>
        <a>lg.oona@mail.ru</a>
        <a>hotels.ln@mail.ru</a>
      </div>
      <div className="HomeFooter-third">
        <img src="/comp.svg" alt="img" />
        <img src="/twitter.svg" alt="img" />
        <img src="/facebook.svg" alt="img" />
        <img src="/social.svg" alt="img" />
        <img src="/instagram.svg" alt="img" />
      </div>
    </div>
  );
}
