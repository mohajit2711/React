import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Images(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6; 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  useEffect(()=> {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(items.offset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage))
  },[])

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
