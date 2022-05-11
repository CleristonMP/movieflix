import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ReactPaginate from 'react-paginate';

import './styles.css';

const Pagination = () => {
  return (
    <ReactPaginate
      pageCount={6}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      containerClassName="pagination-ctr"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousClassName="arrow-left"
      nextClassName="arrow-right"
      activeLinkClassName="item-active"
      disabledClassName="arrow-inactive"
      previousLabel={
        <div className="arrow-ctr">
          <ArrowIcon />
        </div>
      }
      nextLabel={
        <div className="arrow-ctr">
          <ArrowIcon />
        </div>
      }
    />
  );
};

export default Pagination;
