import star from "../images/star.png";
export default function Header() {
  return (
    <div className="header">
      <h1 className="app-name">Packing list</h1>
      <div className="logo">
        <img src={star} alt="packing list application logo" />
      </div>
    </div>
  );
}
