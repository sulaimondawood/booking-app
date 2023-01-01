import flight from "../assets/icons/airplane.svg";

export default function Header() {
  return (
    <header className="lg:flex lg:justify-between">
      <div className="lg:flex lg:gap-2">
        <img src={flight} alt="" />
      </div>
    </header>
  );
}
