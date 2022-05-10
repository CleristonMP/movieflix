import { ReactComponent as Arrow } from 'assets/images/arrow.svg';

import './styles.css';

const Pagination = () => {
  return (
    <div className="pagination-ctr">
      <div className="arrow-ctr">
        <Arrow className="arrow-left arrow-inactive" />
      </div>
      <div className="pagination-item active">1</div>
      <div className="pagination-item">2</div>
      <div className="pagination-item">3</div>
      <div className="pagination-item">...</div>
      <div className="pagination-item">5</div>
      <div className="arrow-ctr">
        <Arrow className="arrow-right" />
      </div>
    </div>
  );
};

export default Pagination;
