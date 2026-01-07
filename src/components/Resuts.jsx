import React from "react";

const Resuts = ({ results }) => {
  if (!results) return <div>Loading...</div>;
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.original_title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Resuts;
