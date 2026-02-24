import './SectionSkeleton.css';

interface SectionSkeletonProps {
  type?: 'default' | 'cards' | 'grid' | 'hero';
}

const SectionSkeleton = ({ type = 'default' }: SectionSkeletonProps) => {
  if (type === 'cards') {
    return (
      <div className="skeleton-container">
        <div className="skeleton-title" />
        <div className="skeleton-subtitle" />
        <div className="skeleton-cards">
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton-card" />
          ))}
        </div>
      </div>
    );
  }

  if (type === 'grid') {
    return (
      <div className="skeleton-container">
        <div className="skeleton-title" />
        <div className="skeleton-subtitle" />
        <div className="skeleton-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="skeleton-grid-item" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="skeleton-container">
      <div className="skeleton-title" />
      <div className="skeleton-subtitle" />
      <div className="skeleton-content" />
    </div>
  );
};

export default SectionSkeleton;
