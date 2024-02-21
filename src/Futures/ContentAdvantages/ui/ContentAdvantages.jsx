import "./style.scss";
export function ContentAdvantages({ imgPath, description }) {
  return (
    <div className="ContentAdvantages-container">
      <img src={`/${imgPath}`} alt="icon" />
      <p>{description}</p>
    </div>
  );
}
