import "./style.scss";
import { Button } from "../../../Shared/ui/Button/Button";
export function ContentPlacement({ imgPath, price, stars, title, place }) {
  const rating = [];
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      rating.push(<img key={i} src="/star.svg" alt={`Star ${i}`} />);
    } else {
      rating.push(<img key={i} src="/unstar.svg" alt={`Other ${i}`} />);
    }
  }
  return (
    <div className="ContentPlacement-container">
      <div className="ContentPlacement-cover">
        <img src={`/${imgPath}`} alt="cover" />
      </div>
      <div className="ContentPlacement-content">
        <div className="ContentPlacement-price">
          <p>
            <span style={{ color: "#999999" }}>от</span>{" "}
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              {price} р
            </span>{" "}
            <span> / ночь</span>
          </p>
          <p>{rating}</p>
        </div>
        <p style={{ paddingBottom: "16px" }}>{title}</p>
        <p style={{ paddingBottom: "20px", color: "#999999" }}>{place}</p>
        <Button>Номера</Button>
      </div>
    </div>
  );
}
