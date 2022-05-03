function Country({ countries }) {
  return (
    <>
      <div className="country">
        {countries.map((m, i) => (
          <div key={i} className="one">
            <h3>{m.name}</h3>
            <p>{m.region}</p>
            <p>{m.area} (Area Size)</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Country;
