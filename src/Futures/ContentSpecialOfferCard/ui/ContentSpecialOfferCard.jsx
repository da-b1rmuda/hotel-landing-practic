import "./style.scss";
export function ContentSpecialOfferCard({
  title,
  price,
  imgLink,
  type = "default",
}) {
  const cardStyle = {
    backgroundImage: `url(/${imgLink})`,
  };
  return (
    <div
      style={cardStyle}
      className={
        type === "large"
          ? "ContentSpecialOfferCard-container large-style"
          : "ContentSpecialOfferCard-container"
      }
    >
      <div className="ContentSpecialOfferCard-text">
        <h3>{title}</h3>
        <span style={{ paddingTop: "5px" }}>от {price} р</span>
      </div>
      <a href="#">
        Подробнее
        <img src="/arrow-left.svg" alt="arrow" />
      </a>
    </div>
  );
}
