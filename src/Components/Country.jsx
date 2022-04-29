function Country({ countries }) {
  return (
    <>
      <div className="country">
        {countries.map((m, i) => (
          <div key={i} className="one">
            <h3>{m.name}</h3>
            <h4>{m.region}</h4>
            <h5>{m.area} (Area Size)</h5>
          </div>
        ))}
      </div>
    </>
  );
}
export default Country;
