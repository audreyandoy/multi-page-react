import React from "react";

const Button = ({ id, name, url }) => {


  return (
      <div>
        <p>{name}</p>
        <img alt="cat" src={url} />
      </div>
  );
};

export default Button;
