function Pagination({ setCurrentButton, itemsPerPage, totalItems, paginate }) {
  const pagesNr = 10;
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }
  // const [currentButton, setCurrentButton] = useState(1);

  return (
    <nav>
      <ul className="pageNumber">
        <a
          href="!#"
          className="disabled"
          onClick={() => setCurrentButton((prev) => prev - 1)}
        >
          {/* Prev */}
        </a>
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
