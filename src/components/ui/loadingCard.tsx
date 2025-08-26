import "../../styles/ui/loadingCard.scss";
import Card from "./card";

export default function LoadingCard({
  type = "main",
  className,
}: {
  type?: "main" | "sub";
  className?: string;
}) {
  return (
    <Card
      className={`loading-card ${type === "main" ? "main" : "sub"} ${
        className ?? ""
      }`}
    >
      <div className="loading-text top"></div>
      <div className="loading-text content" />
      <div className="loading-text bottom" />
    </Card>
  );
}
