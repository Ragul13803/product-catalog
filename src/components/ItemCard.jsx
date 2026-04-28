import { Link } from 'react-router-dom';

export default function ItemCard({ item }) {
  const cat = item.category.toLowerCase();

  return (
    <Link to={`/item/${encodeURIComponent(item.itemname)}`} className="item-card">
      <div className="card-img-wrap">
        <img src={item.image} alt={item.itemname} loading="lazy" />
        <span className={`card-category-badge color-${cat}`}>{item.category}</span>
      </div>
      <div className="card-body">
        <div className="card-name">{item.itemname}</div>
        <div className="card-props">
          {item.itemprops.slice(0, 3).map((prop) => (
            <span key={prop.label} className="prop-chip">
              <strong>{prop.label}:</strong> {prop.value}
            </span>
          ))}
        </div>g
      </div>
    </Link>
  );
}