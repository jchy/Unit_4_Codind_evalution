function Pagination({ total, currentPage, onClickCallback }) {
  const pages = new Array(total).fill(0).map((value, index) =>
    currentPage === index + 1 ? (
      <button disabled key={index} style={{ height: "28px", width: "28px" }}>
        {index + 1}
      </button>
    ) : (
      <button
        key={index}
        onClick={() => onClickCallback(index + 1)}
        style={{ height: "30px", width: "30px" }}
      >
        {" "}
        {index + 1}
      </button>
    )
  );

  return <div style={{ marginBottom: "30px" }}>{pages}</div>;
}

export default Pagination;
