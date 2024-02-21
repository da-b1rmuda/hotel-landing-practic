import "./style.scss";
export function ContentServiceCard({ imgPath, title, description }) {
  return (
    <section className="ContentServiceCard-container">
      <div className="ContentServiceCard-cover">
        <img src={`/${imgPath}`} alt="service" />
      </div>
      <div className="ContentServiceCard-text">
        <a href="#">
          {title}
          <img src="/arrow-left.svg" alt="arrow" />
        </a>
        <p>{description}</p>
      </div>
    </section>
  );
}
