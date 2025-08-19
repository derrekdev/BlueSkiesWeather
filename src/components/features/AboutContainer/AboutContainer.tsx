import "../../../styles/features/aboutContainer.scss";
import GithubIcon from "../../ui/icons/GIthubIcon";
import HomeIcon from "../../ui/icons/HomeIcon";

export default function AboutContainer() {
  return (
    <div className="about-block">
      <div>
        <h1>About Us</h1>
        <p>
          BlueSkiesWeather is a simple yet reliable weather app designed to
          provide accurate, real-time forecasts with a clean and user-friendly
          interface. Whether you’re planning your day, your travels, or just
          curious about the conditions outside. BlueSkiesWeather delivers quick
          and clear insights.
        </p>
      </div>
      <div className="link-block">
        <p>
          This GitHub repository contains the source code for BlueSkiesWeather.
        </p>
        <a
          href="https://github.com/derrekdev/BlueSkiesWeather"
          className="item-link"
        >
          <GithubIcon />
          BlueSkiesWeather Repository
        </a>

        <a href="/" className="item-link">
          <HomeIcon />
          Return Home
        </a>
      </div>
    </div>
  );
}
