import ContentLoader from 'react-content-loader';

import './styles.css';

const CardLoader = () => (
  <div className="card-loader-ctr">
    <ContentLoader
      speed={2}
      width={260}
      height={280}
      viewBox="0 0 260 280"
      backgroundColor="#8d8686"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="3" ry="3" width="250" height="280" />
    </ContentLoader>
  </div>
);

export default CardLoader;
