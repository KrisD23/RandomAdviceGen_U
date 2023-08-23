import { useEffect, useState } from "react";

function App() {
  const [advice, setadvice] = useState(" ");
  const [count, setCount] = useState(-2);

  async function getadvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setadvice(data.slip.advice);

    setCount((c) => c + 1);
  }
  useEffect(() => {
    getadvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getadvice}>Get advice</button>
      <p>You have read {count} advice</p>
    </div>
  );
}

export default App;
