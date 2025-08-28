import "../../styles/ui/loadingCard.scss";
import Card from "./card";
import LoadingCirlcleIcon from "./icons/LoadingCirlcleIcon";

export default function LoadingCard({
  type = "main",
  className,
}: {
  type?: "main" | "sub";
  className?: string;
}) {
  const isMain = type === "main";

  return (
    <Card
      className={`loading-card ${isMain ? "main" : "sub"} ${className ?? ""}`}
    >
      <div className="loading-block content">
        <LoadingCirlcleIcon
          width={isMain ? 120 : 50}
          height={isMain ? 120 : 50}
          className={"loading-spin"}
        />
      </div>
      <div className="loading-block bottom">BlueSkiesWeather</div>
    </Card>
  );
}
