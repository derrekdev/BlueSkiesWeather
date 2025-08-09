import { type ReactNode } from "react";
import "../../styles/ui/card.scss";

type CardType = {
  title?: string;
  cardWidht?: number;
  cardHeight?: number;
  footer?: ReactNode;
  children?: ReactNode;
};

export default function Card({
  title,
  cardWidht = 400,
  cardHeight = 400,
  footer,
  children,
}: CardType) {
  let cardStyle: any = [];

  if (cardWidht) {
    cardStyle = {
      ...cardStyle,
      width: cardWidht + "px",
    };
  }

  if (cardHeight) {
    cardStyle = {
      ...cardStyle,
      height: cardHeight + "px",
    };
  }

  return (
    <div className="card" style={cardStyle}>
      {title && (
        <div className="card-header">
          <h2>{title}</h2>
        </div>
      )}
      <div className="card-content">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
