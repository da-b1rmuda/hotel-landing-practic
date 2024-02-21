export function ContentPlacementContinue({ imgPath }) {
  return (
    <div className="ContentPlacement-container">
      <div
        className="ContentPlacement-continue"
        style={{
          backgroundImage: `url(/${imgPath})`,
        }}
      >
        <a href="#">
          Посмотреть все варианты{" "}
          <img src="/arrow-left-white.svg" alt="arrow" />
        </a>
      </div>
    </div>
  );
}
