import { useState, useMemo } from 'react';
import catalogData from '../data/catalogData';
import CategorySection from '../components/CategorySection';

const ALL_CATEGORIES = ['All', 'Cars', 'Bikes', 'Phones', 'Computers'];

export default function Home() {
  const [active, setActive] = useState('All');

  const grouped = useMemo(() => {
    const categories = active === 'All'
      ? ['Cars', 'Bikes', 'Phones', 'Computers']
      : [active];

    return categories.map((cat) => ({
      category: cat,
      items: catalogData.filter((item) => item.category === cat),
    })).filter((g) => g.items.length > 0);
  }, [active]);

  return (
    <>
      <div className="home-hero">
        <h1>Discover Every <em>Detail.</em></h1>
        <p>Browse through Cars, Bikes, Phones & Computers — all specs in one place.</p>
      </div>

      <div className="filter-bar">
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${active === cat ? 'active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="catalog-wrapper">
        {grouped.map(({ category, items }) => (
          <CategorySection key={category} category={category} items={items} />
        ))}
      </div>
    </>
  );
}