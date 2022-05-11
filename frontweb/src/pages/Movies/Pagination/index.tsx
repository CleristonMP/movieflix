import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ReactPaginate from 'react-paginate';

import './styles.css';

type Props = {
  forcePage?: number;
  pageCount: number;
  range: number;
  onChange?: (pageNumber: number) => void;
};

const Pagination = ({ forcePage, pageCount, range, onChange }: Props) => {
  return (
    <ReactPaginate
      forcePage={forcePage}
      pageCount={pageCount}
      pageRangeDisplayed={range}
      marginPagesDisplayed={1}
      containerClassName="pagination-ctr"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousClassName="arrow-left"
      nextClassName="arrow-right"
      activeLinkClassName="item-active"
      disabledClassName="arrow-inactive"
      onPageChange={(items) => (onChange ? onChange(items.selected) : {})}
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
