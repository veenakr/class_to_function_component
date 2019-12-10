import React, {useState, useEffect} from 'react';


// code for challenge1

// const App = () => {
//   const [count, increaseCount] = useState(0);

//   return (
//     <div style={{ marginBottom: "50px" }}>
//       <h2>Challenge 1</h2>
//       <p>Count is: {count}</p>
//       <button onClick={() => increaseCount(count + 1)}>Increase Count!</button>
//     </div>
//   );
// }

//code for challenge4

const App = () => {
  const [message, changeMessage] = useState("What's happening this week?")

  useEffect(() => {
    setTimeout(() => {
      changeMessage("I only know it's gon be lit!!");
    }, 5000);
  })

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 4</h2>
      <p>Status: {message}</p>
    </div>
  );
}

export default App;