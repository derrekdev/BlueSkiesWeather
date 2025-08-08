import "../../styles/ui/card.scss";

export default function Card({ title }: { title?: string }) {
  return (
    <div className="card">
      {title && (
        <div className="card-header">
          <h2>{title}</h2>
        </div>
      )}
      <div className="card-content">Content</div>
      <div className="card-footer">footer card</div>
    </div>
  );
}
