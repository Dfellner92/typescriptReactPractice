import { useRef } from "react";

function UseRefComponent() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    console.log(inputRef.current?.value);
  };
  
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => handleClick()}>log it</button>
    </div>
  );
}

export default UseRefComponent;
