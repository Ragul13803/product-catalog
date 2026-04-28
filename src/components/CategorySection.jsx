import ItemCard from './ItemCard';

export default function CategorySection({ category, items }) {
  const cat = category.toLowerCase();

  return (
    <section className="category-section" id={category}>
      <div className="category-header">
        <span className={`category-dot dot-${cat}`} />
        <h2 className="category-title">{category}</h2>
        <span className="category-count">{items.length} items</span>
      </div>
      <div className="items-grid">
        {items.map((item) => (
          <ItemCard key={item.itemname} item={item} />
        ))}
      </div>
    </section>
  );
}