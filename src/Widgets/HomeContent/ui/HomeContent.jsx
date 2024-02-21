import "./style.scss";
import {
  ContentSpecialOfferCard,
  ContentServiceCard,
  ContentAdvantages,
  ContentPlacement,
  ContentPlacementContinue,
  ContentTour,
  ContentContacts,
} from "../../../Futures/index";

const services = [
  {
    imgPath: "service-1.png",
    title: "Эксклюзивное обслуживание",
    description:
      "Равным образом постоянный количественный рост и сфера нашей активности",
  },
  {
    imgPath: "service-2.png",
    title: "Аренда банкетных залов",
    description:
      "Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм",
  },
  {
    imgPath: "service-3.png",
    title: "Сауны, бассейны, бани, фитнес-залы",
    description:
      "Не следует, однако забывать, что начало повседневной работы по формированию позиции",
  },
  {
    imgPath: "service-4.png",
    title: "Охраняемые автомобильные стоянки",
    description:
      "Не следует, однако забывать, что начало повседневной работы по формированию позиции",
  },
];
const advantages = [
  {
    imgPath: "bathtub.svg",
    desription:
      "Идейные соображения высшего порядка, а также постоянный количественный рост",
  },
  {
    imgPath: "hanger.svg",
    desription:
      "Значимость этих проблем настолько очевидна, что вопрос остается открытым",
  },
  {
    imgPath: "heating.svg",
    desription:
      "Таким образом реализация плановых заданий играет важную роль для понимания",
  },
  {
    imgPath: "hotel-key.svg",
    desription:
      "Повседневная практика показывает, что сложившаяся структура организации",
  },
  {
    imgPath: "parking.svg",
    desription:
      "Равным образом рамки и место обучения кадров способствует подготовки сотрудника",
  },
  {
    imgPath: "reception.svg",
    desription:
      "Консультация с активом влечет за собой процесс внедрения услуг нашего сервиса ",
  },
  {
    imgPath: "security-box.svg",
    desription:
      "Повседневная практика показывает, что дальнейшее развитие различных форм",
  },
  {
    imgPath: "swimming-pool.svg",
    desription:
      "Значимость этого настолько очевидна, что консультация наших экспертов помогает",
  },
];
const placements = [
  {
    imgPath: "placement-1.png",
    price: "4 698",
    stars: 4,
    title: "Lagoona española",
    place: "Барселона, Испания",
  },
  {
    imgPath: "placement-2.png",
    price: "5 148",
    stars: 4,
    title: "Lagoona son típicas",
    place: "Барселона, Испания",
  },
  {
    imgPath: "placement-3.png",
    price: "6 254",
    stars: 5,
    title: "Lagoona de la guerra",
    place: "Барселона, Испания",
  },
  {
    imgPath: "placement-4.png",
    price: "6 320",
    stars: 5,
    title: "Lagoona mentira piadosa",
    place: "Барселона, Испания",
  },
  {
    imgPath: "placement-5.png",
    price: "6 457",
    stars: 4,
    title: "Lagoona empujar la creatividad",
    place: "Барселона, Испания",
  },
  {
    imgPath: "placement-6.png",
    price: "6 320",
    stars: 4,
    title: "Lagoona el retorno",
    place: "Барселона, Испания",
  },
  {
    imgPath: "placement-7.png",
    price: "6 505",
    stars: 5,
    title: "Lagoona mentira piadosa",
    place: "Барселона, Испания",
  },
  {
    imgPath: "placement-8.png",
    price: "6 824",
    stars: 4,
    title: "Lagoona suerte siguió siempre",
    place: "Барселона, Испания",
  },
];

export function HomeContent() {
  return (
    <div className="HomeContent-container">
      <section>
        <h2>Спецпредложения</h2>
        <div style={{ display: "flex", gap: "23px" }}>
          <div
            style={{ display: "flex", gap: "23px", flexDirection: "column" }}
          >
            <ContentSpecialOfferCard
              price={"55 000"}
              title={"Мальдивские острова"}
              imgLink={"special-offer-1.png"}
            />
            <ContentSpecialOfferCard
              price={"30 000"}
              title={"Горящий тур на остров Крит"}
              imgLink={"special-offer-2.png"}
            />
          </div>
          <div>
            <ContentSpecialOfferCard
              price={"5 000"}
              title={"Номера категории люкс"}
              imgLink={"special-offer-3.png"}
              type="large"
            />
          </div>
        </div>
      </section>
      <section className="HomeContent-aboutUs">
        <h2>О нас</h2>
        <p>
          Идейные соображения высшего порядка, а&nbsp;также сложившаяся
          структура организации влечет за&nbsp;собой процесс внедрения
          и&nbsp;модернизации системы обучения кадров, соответствует насущным
          потребностям. Идейные соображения высшего порядка, а&nbsp;также
          дальнейшее развитие различных форм деятельности представляет собой
          интересный эксперимент проверки системы обучения кадров, соответствует
          насущным потребностям. Равным образом сложившаяся структура
          организации требуют определения и&nbsp;уточнения существенных
          финансовых и&nbsp;административных условий.
        </p>
      </section>
      <section>
        <h2>Услуги</h2>
        <div className="HomeContent-service">
          {services.map((item, key) => (
            <ContentServiceCard
              key={key}
              imgPath={item.imgPath}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
      <section>
        <h2>Преимущества</h2>
        <div className="HomeContent-advantages">
          {advantages.map((item, key) => (
            <ContentAdvantages
              key={key}
              imgPath={item.imgPath}
              description={item.desription}
            />
          ))}
        </div>
      </section>
      <section>
        <h2>Размещение</h2>
        <div className="HomeContent-placements">
          {placements.map((item, key) => (
            <ContentPlacement
              key={key}
              imgPath={item.imgPath}
              price={item.price}
              stars={item.stars}
              title={item.title}
              place={item.place}
            />
          ))}
          <ContentPlacementContinue imgPath={"placement-continue.png"} />
        </div>
      </section>
      <section className="HomeContent-tour">
        <h2>Хочу тур</h2>
        <ContentTour />
      </section>
      <section>
        <h2>Контакты</h2>
        <ContentContacts />
      </section>
    </div>
  );
}
