export const Pagination = ({
  currentPage,
  setCurrentPage,
  cardPerPage,
  setCardPerPage,
  amountOfPages,
  setAmountOfPages,
}) => {
  const pages = Math.ceil(amountOfPages / cardPerPage);
  console.log(pages);

  return <section>Pagination</section>;
};
