import logo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} className="nav--logo" />
    </nav>
  );
}
