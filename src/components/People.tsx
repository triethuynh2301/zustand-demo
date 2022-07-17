import React from "react";
import useStore from "../stores";

const People = () => {
  const people = useStore((state) => state.people);

  return <div>
    {people.map((person, index) => <div key={index}>{person}</div>)}
  </div>;
};

export default People;
