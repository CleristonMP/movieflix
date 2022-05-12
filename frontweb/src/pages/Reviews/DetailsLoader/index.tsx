import ContentLoader from 'react-content-loader';

const DetailsLoader = () => (
    <ContentLoader 
    speed={2}
    width={280}
    height={320}
    viewBox="0 0 280 320"
    backgroundColor="#8d8686"
    foregroundColor="#ecebeb"
  >
    <rect x="4" y="0" rx="3" ry="3" width="260" height="135" /> 
    <rect x="5" y="147" rx="0" ry="0" width="260" height="12" /> 
    <rect x="5" y="167" rx="0" ry="0" width="260" height="12" /> 
    <rect x="5" y="187" rx="0" ry="0" width="260" height="12" />
  </ContentLoader>
);

export default DetailsLoader;
