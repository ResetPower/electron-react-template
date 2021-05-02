import React, { useState } from "react";

export default function App(): React.FunctionComponentElement<Record<string, unknown>> {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p>You've clicked the button for {count} times!</p>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
