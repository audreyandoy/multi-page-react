import React from "react";
import Button from "./Button";

const CatsList = ({ candidates }) => {
  console.log(candidates);
  return (
    <div className="catsList">
      {candidates.map((candidate) => (
        <Button
          key={candidate.id}
          id={candidate.id}
          name={candidate.name}
          url={candidate.url}
          votes={candidate.votes}
        />
      ))}
    </div>
  );
};

export default CatsList;
