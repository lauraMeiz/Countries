function Pagination({ itemsPerPage, totalItems, paginate }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }
  return (
    <nav>
      <ul className="pageNumber">
        {pages.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="#!">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Pagination;
