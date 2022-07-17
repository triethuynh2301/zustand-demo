import React, { useRef } from "react";
import useStore from "../stores";

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const add = useStore(state => state.addPeople);

  const handleClick = () => { 
    add(inputRef.current!.value);
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Add Person</button>
    </div>
  );
};

export default Input;
