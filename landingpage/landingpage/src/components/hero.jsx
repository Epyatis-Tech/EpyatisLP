import { useState } from "react";

function Hero() {
  const [count, setCount] = useState(0);

  return (
    <div className="hero">
      <h1>Welcome to Our Landing Page</h1>
      <p>Click the button to increase the count:</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}
