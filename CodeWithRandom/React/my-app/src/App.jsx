import React from 'react'
import UserGreeting from './components/UserGreeting'
import Forms from './components/Forms'

const App = () => {
  return (
    <>
    <Forms/>
    </>
  )
}

export default App























//For Understanding Props Day-37
{
  /* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Card
          image="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"
          title="Butterfly"
          description="Beautiful Butterfly"
        />
      </div> */
}

//  For Understanding useState DAY-38


// import Card from "./components/Card";
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <h1>{count}</h1>
//         <div style={{ display: "flex", gap: "5px" }}>
//           <button onClick={() => setCount(count + 1)}>Increase</button>
//           <button onClick={() => setCount(count - 1)}>Decrease</button>
//         </div>
//       </div>
//     </>
//   );
// }