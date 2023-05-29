import React, { useState } from "react";

function App() {
  setInterval(update, 1000);

  let time = new Date().toLocaleTimeString();

  const [Time, setTime] = useState(time);

  function update() {
    let updatedTime = new Date().toLocaleTimeString();
    setTime(updatedTime);
  }

  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={update} />
    </div>
  );
}

export default App;
