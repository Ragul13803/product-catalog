import { useParams, Link } from 'react-router-dom';
import catalogData from '../data/catalogData';

export default function ItemDetail() {
  const { itemname } = useParams();
  const item = catalogData.find(
    (i) => i.itemname === decodeURIComponent(itemname)
  );

  if (!item) {
    return (
      <div className="not-found">
        <h2>Item Not Found</h2>
        <Link to="/" className="back-btn">← Back to Catalog</Link>
      </div>
    );
  }

  const cat = item.category.toLowerCase();

  return (
    <div className="detail-page">
      <Link to="/" className="back-btn">← Back to Catalog</Link>

      <div className="detail-grid">
        <div className="detail-img-wrap">
          <img src={item.image} alt={item.itemname} />
        </div>

        <div className="detail-info">
          <span className={`detail-category-label color-${cat} border-${cat} bg-${cat}`}>
            {item.category}
          </span>

          <h1 className="detail-name">{item.itemname}</h1>

          <div className="detail-divider" />

          <p className="detail-specs-title">Specifications</p>

          <div className="detail-specs">
            {item.itemprops.map((prop) => (
              <div key={prop.label} className="spec-row">
                <span className="spec-label">{prop.label}</span>
                <span className="spec-value">{prop.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}