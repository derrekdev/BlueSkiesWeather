import "../../../styles/features/footer.scss";
import LinkIcon from "../../ui/icons/LinkIcon";

export default function Footer() {
  return (
    <footer>
      <a href="/about">
        <LinkIcon strokeWidth={2} width={20} height={20} />
        About BlueSkiesWeather
      </a>
    </footer>
  );
}
